import { useState } from "react";
import { BtnClose, BtnDrag } from "../cardButtons/";
import Card from "../atoms/Card.tsx";
import styled from "styled-components";
import useBoard from "../../contexts/BoardContext.ts";
import useCard from "../../contexts/CardContext.ts";

const StyledText = styled.textarea`
	display: block;
	color: inherit;
	background: inherit;
	font-size: 1rem;
	min-width: 9rem;
	width: 25rem;
	max-width: 98vw;
	min-height: 2.2344rem;
	height: 2rem;
	resize: both;
	border: none;
	outline: none;
	padding: 0.3rem;
	margin: 0;
	box-sizing: border-box;
	border-radius: 10px;
`;

function CardText() {
	const card = useCard<{ text?: string }>();
	const { updateCardExtras } = useBoard();

	const [text, setText] = useState(card.text || '');

	const handleBlur = () => {
		updateCardExtras(card, { text });
	};

	return (
		<Card expand={true} resize="kinda">
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<StyledText
				placeholder="..."
				value={text}
				onChange={(e) => setText(e.target.value)}
				onBlur={handleBlur}
			/>
		</Card>
	);
}

export default CardText;
