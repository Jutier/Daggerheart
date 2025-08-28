import CardButton, { type CardButtonProps } from "../atoms/CardButton";
import { IoClose } from "react-icons/io5";
import useCard from "../../contexts/CardContext";
import useBoard from "../../contexts/BoardContext";

type BtnCloseProps = Omit<CardButtonProps, "color" | "children">;

function BtnClose(props: BtnCloseProps) {
	const { cardId, deckId } = useCard();
	const { cardRemove } = useBoard();

	return (
			<CardButton
				color="var(--color-btn-close)"
				onClick={(event) => {
					event.stopPropagation();
					cardRemove(deckId, cardId);
				}}
				{...props}
			>
				<IoClose/>
			</CardButton>
	);
}

export default BtnClose;
