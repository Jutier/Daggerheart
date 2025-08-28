import * as motion from "motion/react-client"

const DIE_SVGS: { [type: string]: { viewBox: string; inside: string; outside: string } } = {
	d4: {
		viewBox: "0 0 100 100",
		inside: "m88.266 75.617-37.77-21v-44.43zm-38.27-20.12 37.32 20.73h-74.13zm-.5-45.31v44.43l-38 21.44z",
		outside: "M92.64 75.221 52.92 6.431c-1.304-2.237-4.536-2.237-5.84 0L7.37 75.221c-1.288 2.248.329 5.05 2.92 5.06h79.43a3.33 3.33 0 0 0 2.92-1.69 3.38 3.38 0 0 0 0-3.37Z"
	},
	d6: {
		viewBox: "0 0 100 100",
		inside: "M49.471 7.517c.35-.201.78-.201 1.12 0l35.887 20.71-36.427 21.08-36.46-21.05zm-35.86 64a1.13 1.13 0 0 1-.55-1v-41.34l36.49 21v42.1zm73.397-1c.013.408-.198.792-.55 1l-35.847 20.74v-42.08l36.447-21z",
		outside: "m88.569 24.697-35.858-20.7a5.14 5.14 0 0 0-5.12 0l-35.86 20.7a5.12 5.12 0 0 0-2.58 4.42v41.4c0 1.825.97 3.511 2.55 4.43l35.89 20.72c.78.444 1.66.679 2.56.68.9 0 1.78-.238 2.56-.69l35.858-20.7a5.14 5.14 0 0 0 2.58-4.43v-41.41a5.14 5.14 0 0 0-2.58-4.42Z"
	},
	d8: {
		viewBox: "0 0 100 100",
		inside: "M18.676 69.175a.45.45 0 0 1-.13-.3v-1l30.85-52.86.38-.22a.5.5 0 0 1 .23-.06.54.54 0 0 1 .24.06l.38.22 30.84 52.85v1a.47.47 0 0 1-.12.3zm62.79-36.08v32.79l-29.1-49.86 28.86 16.66c.148.084.24.24.24.41Zm-62.68-.41 28.86-16.66-29.1 49.86v-32.79a.47.47 0 0 1 .24-.41Zm31.46 54.49a.49.49 0 0 1-.47 0l-29.46-17h59.38z",
		outside: "m83.226 29.225-31-17.89a4.49 4.49 0 0 0-4.47 0l-31 17.89a4.49 4.49 0 0 0-2.24 3.87v35.78a4.47 4.47 0 0 0 2.24 3.87l31 17.89a4.4 4.4 0 0 0 2.23.6c.786 0 1.559-.207 2.24-.6l31-17.89a4.48 4.48 0 0 0 2.24-3.87v-35.78a4.49 4.49 0 0 0-2.24-3.87Z"
	},
	d10: {
		viewBox: "0 0 100 100",
		inside: "M89.158 41.72a.35.35 0 0 1 .15.29v18.8a.37.37 0 0 1-.16.31l-.66.45h-11.28l-24.93-47.5zm-39.15 31.23-26.26-11.13 25.86-49.15.18-.14a.34.34 0 0 1 .22-.07.4.4 0 0 1 .22.07l.18.14 25.8 49.15zm-39.21-31.23 36.94-27.66-25 47.51h-11.25l-.66-.45a.38.38 0 0 1-.16-.31v-18.8a.38.38 0 0 1 .13-.29Zm2.16 20.85h10l26.55 11.25v13.57zm37.55 24.82V73.82l26.5-11.25h10z",
		outside: "M93.436 42.075a4.4 4.4 0 0 0-1.74-3.51l-38.9-29.17a4.41 4.41 0 0 0-5.24 0l-38.98 29.17a4.42 4.42 0 0 0-1.76 3.51v18.79a4.37 4.37 0 0 0 1.91 3.62l39 26.47a4.36 4.36 0 0 0 4.92 0l38.9-26.46a4.4 4.4 0 0 0 1.91-3.62z"
	},
	d12: {
		viewBox: "0 0 100 100",
		inside: "M70.902 21.278a.5.5 0 0 1 .26.19l12.51 17.22-11.15 3.19-22.28-16.18.26-11zm-7.5 47.3h-27.3l-8.44-26 22.09-16 22.09 16zm-34.42-47.11a.5.5 0 0 1 .26-.19l20.28-6.59-.26 11-22.28 16.18-10.53-3.15zm-12.74 39.93a.5.5 0 0 1-.1-.32v-21.42l10.57 3.17 8.53 26.17-6.47 9.62zm34 24.48c-.11.04-.23.04-.34 0l-20.4-6.63 6.5-9.67h27.51l7 9.7zm33.69-24.48-12.56 17.29-7-9.7 8.5-26.16 11.21-3.2v21.45a.5.5 0 0 1-.15.32Z",
		outside: "m87.172 36.688-12.77-17.57a4.53 4.53 0 0 0-2.27-1.65l-20.66-6.71c-.909-.3-1.89-.3-2.8 0l-20.66 6.71a4.54 4.54 0 0 0-2.27 1.65l-12.77 17.57a4.5 4.5 0 0 0-.86 2.67v21.72a4.5 4.5 0 0 0 .86 2.67l12.77 17.58a4.5 4.5 0 0 0 2.27 1.67l20.66 6.72c.911.294 1.89.294 2.8 0l20.66-6.72a4.5 4.5 0 0 0 2.27-1.64l12.77-17.61a4.48 4.48 0 0 0 .86-2.67v-21.72a4.5 4.5 0 0 0-.86-2.67Z"
	},
	d20: {
		viewBox: "0 0 100 100",
		inside: "M80.047 68.672Zm0-35.24c.15.093.24.26.25.44v1l-10.56 33.13-18.88-32.71 28.65-2.16zm-30.02 2.4 19 32.88h-38zm-19.72 32.17-10.55-33.17v-1c0-.18.1-.347.25-.44l.52-.3 28.67 2.16zm-.8.73h-9.4l-.1-.06a.51.51 0 0 1-.25-.43v-30.08zm-.19 1h.67l13.33 12.4-21.47-12.4zm2.14 0h37.15l-15.74 14.64-2.59 1.46a.5.5 0 0 1-.5 0l-2.59-1.49zm38.62 0h8.13l-21.47 12.4zm7.92-37.48-27.49 2.06v-17.92zm-28.49-15.86v17.92l-27.44-2.06zm30.55 52.44h-9.55l9.7-30v11z",
		outside: "m82.031 29.876-29.77-17.14c-1.39-.8-3.11-.8-4.5 0l-29.77 17.14a4.5 4.5 0 0 0-2.25 3.86v34.41c0 1.608.86 3.094 2.25 3.9l29.77 17.18c1.39.799 3.11.799 4.5 0l29.77-17.18a4.54 4.54 0 0 0 2.25-3.9v-34.41a4.52 4.52 0 0 0-2.25-3.86Z"
	},
	circle: {
		viewBox: "0 0 100 100",
		inside: "M80.047 68.672Zm0-35.24c.15.093.24.26.25.44v1l-10.56 33.13-18.88-32.71 28.65-2.16zm-30.02 2.4 19 32.88h-38zm-19.72 32.17-10.55-33.17v-1c0-.18.1-.347.25-.44l.52-.3 28.67 2.16zm-.8.73h-9.4l-.1-.06a.51.51 0 0 1-.25-.43v-30.08zm-.19 1h.67l13.33 12.4-21.47-12.4zm2.14 0h37.15l-15.74 14.64-2.59 1.46a.5.5 0 0 1-.5 0l-2.59-1.49zm38.62 0h8.13l-21.47 12.4zm7.92-37.48-27.49 2.06v-17.92zm-28.49-15.86v17.92l-27.44-2.06zm30.55 52.44h-9.55l9.7-30v11z",
		outside: "M90,50 A40,40 0 1,0 10,50 A40,40 0 1,0 90,50Z"
	}
};


type DieProps = {
	dieType: string;
	value: number | string;
	rolling?: boolean;
	size?: number | string;
	textMult?: number;
	fillColor?: string;
	inStrokeColor?: string;
	outStrokeColor?: string;
	textColor?: string;
	onClick?: () => void;
} & React.SVGProps<SVGSVGElement>;

function Die({
	dieType,
	value,
	rolling=false,
	size=100,
	textMult=1.8,
	onClick,
}: DieProps) {

	let _dieType, fillColor, inStrokeColor, outStrokeColor, textColor;

	switch (dieType) {
		case "hope":
			_dieType = "d12"
			fillColor = "#111111a0";
			inStrokeColor = "var(--color-bg)";
			outStrokeColor = "var(--color-hope)";
			textColor = "var(--color-hope)";
			break;
		case "fear":
			_dieType = "d12"
			fillColor = "#111111a0";
			inStrokeColor = "var(--color-bg)";
			outStrokeColor = "var(--color-fear)";
			textColor = "var(--color-fear)";
			break;
		default:
			_dieType = dieType
			fillColor = "var(--color-bg)";
			inStrokeColor = "var(--color-fg)";
			outStrokeColor = "var(--color-accent-1)";
			textColor = "var(--color-text)";
	}

	const die = DIE_SVGS[_dieType];

	return (
		<div>
			<motion.svg
				viewBox={die.viewBox}
				width={size}
				height={size}
				onClick={onClick}
				animate={rolling ? { rotate: 360 } : { rotate: 0 }}
					transition={{
						repeat: rolling ? Infinity : 0,
						repeatType: "loop",
						duration: 0.4,
						ease: "linear",
				}}
				whileTap={{ scale: 0.92, transition: { duration: 0.1 } }}
				style={{ cursor: "pointer" }}
			>
				<path
					d={die.inside}
					fill={fillColor}
					stroke={inStrokeColor}
					strokeWidth={3}
					strokeLinejoin="round"
				/>
				<path
					d={die.outside}
					fill="none"
					stroke={outStrokeColor}
					strokeWidth={7}
					strokeLinejoin="round"
				/>
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					fontSize={`${1*textMult}rem`}
					fill={textColor}
					fontWeight="bold"
					dominantBaseline="middle"
					style={{ userSelect: "none" }}
				>
					{value === "H/F" ? (
						<>
							<tspan fill="var(--color-hope)">H</tspan>
							/
							<tspan fill="var(--color-fear)">F</tspan>
						</>
					) : (
						value
					)}

				</text>
			</motion.svg>
		</div>
	);
}

export default Die;
