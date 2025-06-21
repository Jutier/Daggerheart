const body = document.getElementById('body');
const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const localPref = localStorage.getItem('theme');


function toggleDark() {
	const isDark = body.classList.toggle('dark-mode');
	localStorage.setItem('theme', isDark ? 'dark' : 'light')
};

const goDark = localPref ? localPref === 'dark' : sysDark;
if (goDark) {
	toggleDark();
}



function toggleBtns() {
	const btnsPages = document.querySelectorAll('.floating-menu');
	btnsPages.forEach(page => page.classList.toggle('active'));
};



function addEmptyPage() {
	const section = document.createElement('section');
	section.className = 'group';

	// Create .inner
	for (let i = 0; i < 3; i++) {
		const inner = document.createElement('div');
		inner.className = 'inner';
		section.appendChild(inner);
	}

	document.querySelector('#sections').appendChild(section);

	section.scrollIntoView({ behavior: 'smooth' });
}
