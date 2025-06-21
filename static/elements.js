async function defineCustomElement(key) {

	const tagName = `card-${key}`;
	const templatePath = `components/template-${key}.html`;

	// Already defined
	if (customElements.get(tagName)) {
		return customElements.get(tagName);
	}

	// Fetch external template
	const resp = await fetch(templatePath);
	if (!resp.ok) throw new Error(`Error while loading template: ${templatePath}`);
	const html = await resp.text();

	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = html;
	const template = tempDiv.querySelector('template');
	if (!template) throw new Error(`<template> not found: ${templatePath}`);

	// Creates an anonymous class and stores the reference
	const ElemClass = class extends HTMLElement {
		constructor() {
			super();
			const shadow = this.attachShadow({ mode: 'open' });

			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = '../static/common.css';
			shadow.appendChild(link);
			
			shadow.appendChild(template.content.cloneNode(true));
		}
		connectedCallback() {
			const close = this.shadowRoot.querySelector('.delete-card-btn');
			close.addEventListener('click', (event) => this.remove());
			if (key === 'image') {
				const input = this.shadowRoot.querySelector('.image-input');
				const img = this.shadowRoot.querySelector('.image-preview');
				const btn = this.shadowRoot.querySelector('.input-send');
				
				btn.addEventListener('click', (event) => {
					const url = input.value.trim();
					if (url) {
						input.style.display = 'none';
						btn.style.display = 'none';
						img.style.display = 'block';
						img.src = url;
					}
				});
			}
			if (key === 'enemy') {
				const edit = this.shadowRoot.querySelector('.edit-card-btn');
				edit.addEventListener('click', (event) => editEnemyCard(this));

				const buttons = this.shadowRoot.querySelectorAll('.delta-btn');
				buttons.forEach(btn => {
					btn.addEventListener('click', (event) => {
						const delta = Number(btn.getAttribute('delta-value')) || 0;
						this.changeValue(btn, delta);
					});
				});
			}
		}
	};
	if (key === 'enemy') {
		ElemClass.prototype.changeValue = function(btn, delta) {
			// Change .value related to the button context
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
			max = isNaN(max) ? 0 : max;
			val += delta;
			if (val < 0) val = 0;
			if (val > max) val = max;
			valueElem.textContent = val;
		};
	}
	customElements.define(tagName, ElemClass);
	return ElemClass;
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
