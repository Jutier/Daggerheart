const body = document.getElementById("body");
const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const localPref = localStorage.getItem("theme");

function toggleDark() {
	const isDark = body.classList.toggle("dark-mode");
	localStorage.setItem("theme", isDark ? "dark" : "light")
};

const goDark = localPref ? localPref === "dark" : sysDark;

if (goDark) {
	toggleDark();
}

function newCard() {
	function handlePageClick(event) {
		// Catch miss-click
		if (event.target.closest('#add-card-btn')) return;

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
			document.removeEventListener('click', handlePageClick);
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

		// .card element
		const card = document.createElement('div');
		card.className = 'card';
		const input = document.createElement('textarea');
		input.type = 'text';
		input.placeholder = '...';
		card.appendChild(input);

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
		document.removeEventListener('click', handlePageClick);
	}
	document.addEventListener('click', handlePageClick);
}
