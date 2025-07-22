async function defineCustomElement(key) {
	/*
	For a given key (card-type)	returns the respective Element (for no particular reason, just "why not?")
	if there isn't one, finds and fetches its template,
	from it creates a class, attaches necessary methods and defines the custom element
	*/
	const tagName = `card-${key}`;
	const templatePath = `components/template-${key}.html`;
	const cElement = customElements.get(tagName)

	// Already defined
	if (cElement) return cElement;

	// Fetches external template
	const template = await fetchTemplate(templatePath)

	// Creates a class and stores the reference
	const ElemClass = createCustomElementClass(template, key)

	// Defines methods for classes that need them
	addClassMethods(ElemClass, key)

	customElements.define(tagName, ElemClass);
	return ElemClass;
}



async function fetchTemplate(path) {
	const resp = await fetch(path);
	if (!resp.ok) throw new Error(`Error while loading template: ${path}`);
	const html = await resp.text();

	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = html;
	const template = tempDiv.querySelector('template');
	if (!template) throw new Error(`<template> not found: ${path}`);

	return template
}



function createCustomElementClass(template, key) {
	/*
	Creates a class based on the given template
	For each card, connects relevant events
	*/
	return class extends HTMLElement {
		constructor() {
			super();
			// Using Shadow DOM  is probably a bit overkill for this, but I think it results in a cleaner structure
			const shadow = this.attachShadow({ mode: 'open' });

			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = '../static/common.css';
			shadow.appendChild(link);

			shadow.appendChild(template.content.cloneNode(true));
		}

		connectedCallback() {
			// Connects the close button, standard for any card
			const close = this.shadowRoot.querySelector('.delete-card-btn');
			close.addEventListener('click', () => this.remove());

			// Additional events that some cards may have
			const events = cardBehaviors[key]?.bindEvents;
			if (events) events(this.shadowRoot, this);
		}
	};
}



function addClassMethods(elementClass, key) {
	// For each method on cardBehaviors (if any), adds it to the class
	const methods = cardBehaviors[key]?.methods ?? {}

	for (const [name, fn] of Object.entries(methods)) {
		elementClass.prototype[name] = fn;
	}
}




// I don't like this, but it's a step... in some direction...
const cardBehaviors = {
	image: {
		bindEvents: (root, element) => {
			const btn = root.querySelector('.input-send');

			btn.addEventListener('click', element.sendImage.bind(element));
		},
		methods: {
			sendImage: function () {
				const input = this.shadowRoot.querySelector('.image-input');
				const img = this.shadowRoot.querySelector('.image-preview');
				const btn = this.shadowRoot.querySelector('.input-send');

				const url = input.value.trim();
				if (url) {
					input.style.display = 'none';
					btn.style.display = 'none';
					img.style.display = 'block';
					img.src = url;
				}
			}
		}
	},
	feartracker: {
		bindEvents: (root, element) => {
			const active = root.querySelector('#fear-active')
			const inactive = root.querySelector('#fear-inactive')
			const deltaButtons = root.querySelectorAll('.delta-btn');
			deltaButtons.forEach(btn => {
				btn.addEventListener('click', () => {
					element.changeValue(btn, active, inactive);
				});
			});
		},
		methods: {
			changeValue: function (btn, active, inactive) {
				const delta = Number(btn.getAttribute('delta-value')) || 0;
				let fearCount = Number(active.getAttribute('fearCount')) || 0;

				fearCount += delta;
				if (fearCount < 0) fearCount = 0;
				if (fearCount > 12) fearCount = 12;

				active.setAttribute('fearCount', fearCount);

				active.textContent = '💀'.repeat(fearCount);
				inactive.textContent = '💀'.repeat(12 - fearCount);

			}
		}
	},
	enemy: {
		bindEvents: (root, element) => {
			const edit = root.querySelector('.edit-card-btn');
			edit.addEventListener('click', () => editEnemyCard(element));

			const deltaButtons = root.querySelectorAll('.delta-btn');
			deltaButtons.forEach(btn => {
				btn.addEventListener('click', () => {
					element.changeValue(btn);
				});
			});

		},
		methods: {
			changeValue: function (btn) {
				// Change .value related to the button context
				const delta = Number(btn.getAttribute('delta-value')) || 0;

				const variableBlock = btn.closest('.variable');
				if (!variableBlock) return;

				const valueSlot = variableBlock.querySelector('slot[name$="val"]');
				const maxSlot = variableBlock.querySelector('slot[name$="max"]');
				if (!valueSlot || !maxSlot) return;

				const valueElem = valueSlot.assignedElements()[0];
				const maxElem = maxSlot.assignedElements()[0];
				if (!valueElem || !maxElem) return;

				let val = parseInt(valueElem.textContent);
				let max = parseInt(maxElem.textContent);

				val = isNaN(val) ? 0 : val;
				val += delta;
				/*
				// Overhealing is a thing, and sometimes negative HP is usefull...
				// max is no longer used, but it's kept here just in case
				max = isNaN(max) ? 0 : max;
				if (val < 0) val = 0;
				if (val > max) val = max;
				*/
				valueElem.textContent = val;
			}
		}
	}
}





defineCustomElement('armrnstrs')
defineCustomElement('attributes')
defineCustomElement('combat')
defineCustomElement('conditions')
defineCustomElement('death')
defineCustomElement('difficulty')
defineCustomElement('gmmoves')
defineCustomElement('fear')
defineCustomElement('hope')
defineCustomElement('prices')
defineCustomElement('range')
defineCustomElement('rest')
defineCustomElement('rolls')
defineCustomElement('stats')
defineCustomElement('teamwork')
defineCustomElement('text')
