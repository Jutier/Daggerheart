import { BtnClose, BtnDrag } from "../cardButtons/";
import Card from "../atoms/Card.tsx";
import Skull from "../../assets/skull.png";
import styled from "styled-components";
import useCard from "../../contexts/CardContext.ts";
import useBoard from "../../contexts/BoardContext.ts";

const SkullRow = styled.span`
	display: inline-flex;
	width: 100%;
	align-items: center;
	justify-content: start;
	gap: 2px;
`;

const FearCounter = styled.h2`
	display: inline-flex;
	color: var(--color-accent-1);
	font-family: var(--font-title);
	margin: 0;
	width: 1.8rem;
	justify-content: center;
`;

const SkullImg = styled.img<{ $active: boolean }>`
	width: 1.75rem;
	height: 1.75rem;
	user-select: none;
	opacity: ${({ $active }) => ($active ? 1 : 0.3)};
	transition: all 0.2s;

	&:active {
		transform: scale(0.85);
	}
`;

function CardFearTracker() {
	const card = useCard<{ fearCount?: number}>();
	const { updateCardExtras } = useBoard();
	const maxFear = 12;
	// const minFear = 0; // No use for this current implementation

	function handleChange(idx: number) {
		const value = (idx + 1 === card.fearCount) ? idx : idx + 1;
		updateCardExtras(card, {"fearCount": value})
	}

	return (
		<Card>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<SkullRow>
				<FearCounter>{card.fearCount}</FearCounter>
				{[...Array(maxFear)].map((_, idx) => (
					<SkullImg
						$active={idx < (card.fearCount || 0)}
						onClick={() => handleChange(idx)}
						key={idx}
						src={Skull}
						draggable="false"
					/>
				))}
			</SkullRow>
		</Card>
	);
}

export default CardFearTracker;
