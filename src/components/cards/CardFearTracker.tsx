import { BtnClose, BtnDrag } from "../cardButtons/";
import Card from "../atoms/Card.tsx";
import { PlusButton, MinusButton } from "../deltaButtons";
import Skull from "../../assets/skull.png";
import styled from "styled-components";
import useCard from "../../contexts/CardContext.ts";
import useBoard from "../../contexts/BoardContext.ts";

const SkullRow = styled.span`
	display: inline-flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 2px;
`;

const SkullImg = styled.img<{ $active: boolean }>`
	width: 1.715rem;
	height: 1.715rem;
	user-select: none;
	opacity: ${({ $active }) => ($active ? 1 : 0.3)};
	transition: opacity 0.2s;
`;

function CardFearTracker() {
	const card = useCard<{ fearCount?: number}>();
	const { updateCardExtras } = useBoard();
	const maxFear = 12;
	const minFear = 0;

	function handleChange(value: number) {
		updateCardExtras(card, {"fearCount": value})
	}

	return (
		<Card>
			<BtnClose right="0.1rem"/>
			<BtnDrag right="calc(100% - 1.5rem)"/>

			<SkullRow>
				<MinusButton
					state={card.fearCount || 0}
					setState={handleChange}
					min={minFear}
					max={maxFear}
				/>
					{[...Array(maxFear)].map((_, idx) => (
						<SkullImg
							key={idx}
							src={Skull}
							draggable="false"
							$active={idx < (card.fearCount || 0)}
						/>
					))}
				<PlusButton
					state={card.fearCount || 0}
					setState={handleChange}
					min={minFear}
					max={maxFear}
				/>
			</SkullRow>
		</Card>
	);
}

export default CardFearTracker;
