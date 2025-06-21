async function newCard(key) {
	// Changes mouse to a card icon	
	document.body.classList.add('card-cursor');

	// Create element if needed
	await defineCustomElement(key);

	let card = createCard(key);

	async function handlePageClick(event) {
		// Catch miss-click
		if (event.target.closest('.add-card-btn')) return;

		// Changes mouse back to normal
		document.body.classList.remove('card-cursor');

		document.removeEventListener('click', handlePageClick);

		placeElement(event, card)

		if (key =='enemy') {
			// Reset the form and clear feats fields
			enemyForm.reset();
			featsContainer.innerHTML = '';

			const values = await showFormGetValues(enemyForm);
			if (!values) return;
			populateEnemy(card, values);
		}
	}
	document.addEventListener('click', handlePageClick);
}



function createCard(key) {
	const card = document.createElement(`card-${key}`);
	card.className = 'card';
	return card;
}



function placeElement(event, card) {
	// Find .inner
	let target = event.target;
	let inner;

	while (target && target !== document.body) {
		if (target.classList.contains('inner')) {
			inner = target;
			break;
		}
		target = target.parentElement;
	}
	// .inner not found
	if (!inner) {
		return;
	}
	// Determines relative position within .inner
	const cards = Array.from(inner.children);
	let closestChild = null;
	let minDist = Infinity;
	cards.forEach(child => {
		const rect = child.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const dx = event.clientX - centerX;
		const dy = event.clientY - centerY;
		const dist = Math.sqrt(dx * dx + dy * dy);
		if (dist < minDist) {
			minDist = dist;
			closestChild = child;
		}
	});
	if (closestChild) {
		const rect = closestChild.getBoundingClientRect();
		if (event.clientY < rect.top + rect.height / 2) {
			inner.insertBefore(card, closestChild);
		} else {
			inner.insertBefore(card, closestChild.nextSibling);
		}
	} else {
		// Empty .inner
		inner.appendChild(card);
	}
}