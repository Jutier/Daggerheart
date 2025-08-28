import CardButton, { type CardButtonProps } from "../atoms/CardButton.tsx";
import { RiDragDropLine } from "react-icons/ri";
import useBoard from "../../contexts/BoardContext";
import useCard from "../../contexts/CardContext";

type BtnDragProps = Omit<CardButtonProps, "color" | "children">;

function BtnDrag(props: BtnDragProps) {
	const { cardMove } = useBoard();
	const card = useCard();

	return (
			<CardButton 
				color="var(--color-btn-drag)" 
				onClick={(event) => {
					event.stopPropagation();
					cardMove(card);
				}}
				{...props}
			>
				<RiDragDropLine/>
			</CardButton>
	);
}

export default BtnDrag;
