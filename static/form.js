const enemyForm = document.getElementById('enemy-form');
const featsContainer = document.getElementById('feats-container');



async function showFormGetValues(form) {
	form.classList.add('active');

	return new Promise(resolve => {
		function onSubmit(event) {
			event.preventDefault();

			const data = new FormData(form);
			const values = Object.fromEntries(data.entries());

			const feats = [];
			if (featsContainer) {
				featsContainer.querySelectorAll('.feat-fields').forEach(featDiv => {
					const name = featDiv.querySelector('[name="feat-name"]')?.value || '';
					const type = featDiv.querySelector('[name="feat-type"]')?.value || '';
					const text = featDiv.querySelector('[name="feat-text"]')?.value || '';
					if (name || type || text) {
						feats.push({ name, type, text });
					}
				});
			}
			values.feats = feats;

			form.classList.remove('active');
			form.removeEventListener('submit', onSubmit);
			cancelBtn.removeEventListener('click', onCancel);
			resolve(values)
		}

		function onCancel() {
			form.classList.remove('active');
			form.removeEventListener('submit', onSubmit);
			cancelBtn.removeEventListener('click', onCancel);
			resolve(null);
		}

		const cancelBtn = form.querySelector('#form-cancel');
		form.addEventListener('submit', onSubmit);
		cancelBtn.addEventListener('click', onCancel);
	});
}



function populateEnemy(card, values) {
	const slotMap = {
		'name'      : ['name'],
		'tier'      : ['tier'],
		'type'      : ['type'],
		'thresh'    : ['thresh'],
		'atk-name'  : ['atk-name'],
		'atk-range' : ['atk-range'],
		'atk-dmg'   : ['atk-dmg'],
		'atk-type'  : ['atk-type'],
		'atk-mod'   : ['atk-mod'],
		'dif'       : ['dif'],
		'hp-max'        : ['hp-val','hp-max'],
		'stress-max'    : ['stress-val','stress-max'],
	};

	Object.keys(slotMap).forEach(field => {
		const value = values[field] || '';
		slotMap[field].forEach(slot => {
			let elem = card.querySelector(`[slot="${slot}"]`);
			if (!elem) {
				elem = document.createElement('span');
				elem.className = field;
				elem.setAttribute('slot', slot);
				card.appendChild(elem);
			}
			elem.textContent = value;
		});
	});

	populateFeats(card, values)
}



function populateFeats(card, values) {
	const feats = values.feats || [];

	// Find the container for feats inside the shadow DOM
	const featDiv = card.shadowRoot?.querySelector('.feat');
	const ul = featDiv?.querySelector('.feats');
	if (!featDiv || !ul) return;

	// Clear previous feats
	ul.innerHTML = '';

	// Hide the feats section if there are no feats
	if (feats.length === 0) {
		featDiv.style.display = 'none';
		return;
	}

	// Show the feats section and each feat
	featDiv.style.display = '';
	feats.forEach(feat => {
		const li = document.createElement('li');
		li.innerHTML = `
			<span class="feat-name">${feat.name || ''}</span>
			${feat.type ? '<span class="feat-type"> - ' + feat.type + '</span>' : ''} :
			<span class="feat-text">${feat.text || ''}</span>
		`;
		ul.appendChild(li);
	});
}



async function editEnemyCard(card) {
	// Reset the form and clear feats fields
	enemyForm.reset();
	featsContainer.innerHTML = '';

	fillEnemyFormFromCard(card, enemyForm);

	const values = await showFormGetValues(enemyForm);
	if (!values) return;
	populateEnemy(card, values);
}



function fillEnemyFormFromCard(card, form) {
	// Fill simple fields using the slot names
	Array.from(form.elements).forEach(input => {
		if (input.name) {
			const el = card.querySelector(`[slot="${input.name}"]`);
			if (el) input.value = el.textContent;
		}
	});

	// Fill feats fields from the shadow DOM list
	const featsUl = card.shadowRoot.querySelector('.feats');

	featsUl.querySelectorAll('li').forEach(li => {
		const name = li.querySelector('.feat-name')?.textContent || '';
		const type = li.querySelector('.feat-type')?.textContent.replace(/^\s*-\s*/, '') || '';
		const text = li.querySelector('.feat-text')?.textContent || '';
		addFormFeat(name, type, text);
	});
}
