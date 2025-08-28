import { useState } from "react";
import styled from "styled-components";
import useBoard from "../../contexts/BoardContext.ts";
import useCard from "../../contexts/CardContext.ts";
import { IoClose, IoCaretUp, IoCaretDown } from "react-icons/io5";

const Space = styled.div.attrs<{
	$height: number
}>(props => ({
	style: {
		height: props.$height + "px"
	}
}))`
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: fit-content;
	margin: 0 auto;
	justify-content: space-between;
	border-radius: 20px;
	transition: all 0.2s ease-out;

	&:focus {
		outline: none;
	}

	&:hover, &:focus {
		background-color: #8885;
		backdrop-filter: blur(5px);
	}
`;

const StyleButton = styled.div`
	display: flex;
	background-color: #8883;
	backdrop-filter: blur(5px);
	width: 50px;
	height: 30px;
	border-radius: 20px;
	color: var(--color-fg);
	align-items: center;
	align-content: center;
	justify-content: center;
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

function CardSpacing(){
	const card = useCard<{ height?: number }>();
	const { updateCardExtras, cardRemove } = useBoard();

	const [height, setHeight] = useState(card.height || 100);

	function handleMouseDown(event: React.MouseEvent<HTMLDivElement>, upwards: boolean) {

		const wrapper = event.currentTarget.parentElement;
		
		function moveListener(event: MouseEvent) {
			setHeight((prev) => 
				Math.max(100, upwards ? prev - event.movementY : prev + event.movementY)
			);
		}
		
		function upListener() {
			updateCardExtras(card, { height });
			if (wrapper) wrapper.blur()
			window.removeEventListener("mousemove", moveListener);
			window.removeEventListener("mouseup", upListener);
		}

		window.addEventListener("mousemove", moveListener);
		window.addEventListener("mouseup", upListener);
	}



	return (
		<Space $height={height} className="no-print">
			<Wrapper tabIndex={0}>
				<StyleButton onMouseDown={(event) => handleMouseDown(event, true)}>
					<IoCaretUp size={30}/>
				</StyleButton>
				<StyleButton
					onClick={(event) => {
						event.stopPropagation();
						cardRemove(card.deckId, card.cardId);
					}}
				>
					<IoClose size={30}/>
				</StyleButton>
				<StyleButton onMouseDown={(event) => handleMouseDown(event, false)}>
					<IoCaretDown size={30}/>
				</StyleButton>
			</Wrapper>
		</Space>
	);
}

export default CardSpacing;
