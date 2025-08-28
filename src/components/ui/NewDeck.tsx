import styled from "styled-components";
import useBoard from "../../contexts/BoardContext";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { motion } from "motion/react";

const Deck = styled(motion.div)`
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
`;

const Button = styled.button`
	width: 10rem;
	height: 10rem;
	border: none;
	margin: auto auto;
	padding: 0;
	font-size: 10rem;

	background-color: #8885;
	backdrop-filter: blur(3px);
	border-radius: 20px;
	color: var(--color-fg);
	transition: all 0.2s ease-out;

	&:hover {
		color: var(--color-accent-2);
		background-color: var(--color-bg);
		transform: scale(1.05);
	}

	&:active {
		color: var(--color-accent-1);
		background-color: var(--color-fg);
		transform: scale(0.95);
	}
`;

function DeckRender() {
	const { deckAdd } = useBoard();
	return (
		<Deck
			className="no-print"
			layout
		>
			<Button onClick={deckAdd}>
				<HiOutlineSquaresPlus/>
			</Button>
		</Deck>
	);
}

export default DeckRender;
