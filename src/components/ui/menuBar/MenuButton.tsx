import styled from "styled-components";
import { AnimatePresence } from "motion/react";
import HoverMenu, { type MenuItem } from "./HoverMenu";
import { useState } from "react";

const BarButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 15px;
	background-color: var(--color-bg);
	color: var(--color-accent-2);
	cursor: pointer;
	transition: all 0.2s ease-out;

	&:hover {
		color: var(--color-accent-1);
		background-color: var(--color-accent-2);
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}

	&:focus-visible {
		border-radius: 8px;
		outline: 4px solid var(--color-accent-1);
	}
`;

type MenuButtonProps = {
	optionsObject: MenuItem[];
	funcSelec: (call: string) => void;
	children: React.ReactNode;
	width: string;
	opWidth: string;
	opHeight: string;
};

function MenuButton({optionsObject, funcSelec, children, width, opWidth, opHeight }: MenuButtonProps) {
	const [menuOpen, setmMenuOpen] = useState(false);

	return (
		<>
			<BarButton
				onKeyDown={(e) => e.key === "Escape" && setmMenuOpen(false)}
				onClick={() => setmMenuOpen(!menuOpen)}
			>
				{children}
			</BarButton>
			<AnimatePresence>
				{ menuOpen && <HoverMenu
						items={optionsObject}
						funcSelec={funcSelec}
						width={width}
						opWidth={opWidth}
						opHeight={opHeight}
						setOpen={setmMenuOpen}
					/>
				}
			</AnimatePresence>
		</>
	);
}

export default MenuButton;
