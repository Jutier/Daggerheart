import { animate, utils } from "animejs";

export type Theme = 
	"Adjust-Reality" |
	"Elemental-Origin" |
	"Flight" |
	"Seaborne" |
	"Tempest" |
	"Wildborne";

function useTheme() {

	function setTheme(newTheme: Theme) {
		localStorage.setItem("theme", newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
	}

	function changeTheme(newTheme: Theme) {
		const x = utils.random(15, 90);
		const y = utils.random(20, 80);
		const bgBlob = document.createElement("div");
		const oldBg = getComputedStyle(document.documentElement).getPropertyValue("--img-bg");

		bgBlob.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: ${oldBg};
			background-size: cover;
			background-position: calc(50% + 2rem) bottom;
			clip-path: circle(150vw at ${x}% ${y}%);
			pointer-events: none;
			z-index: -999;
		`;
		document.body.appendChild(bgBlob);

		setTheme(newTheme)

		animate(bgBlob, {
			clipPath: `circle(0% at ${x}% ${y}%)`,
			ease: "outQuad",
			duration: 1000,
			onComplete: () => {
				document.body.removeChild(bgBlob);
			}
		})
	}

	return { changeTheme };
}

export default useTheme;
