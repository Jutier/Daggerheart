import { useState } from "react";
import { BtnClose, BtnDrag, BtnEdit, BtnTooltip } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Card from "../atoms/Card.tsx";
import styled from "styled-components";
import { TbPhotoShare } from "react-icons/tb";
import useCard from "../../contexts/CardContext";
import useBoard from "../../contexts/BoardContext.ts";

const StyledInput = styled.input`
	width: 83%;
	height: 1.77rem;
	background: inherit;
	color: inherit;
	border: none;
	outline: none;
	font-size: 1rem;
	padding: 0 3.2rem 0 0;
`;

const StyledView = styled.img`
	width: 100%;
	border-radius: 12px;
	display: block;
	user-select: none;
`;

const StyledButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: var(--color-plus);
	background: inherit;
	border: none;
	margin: 0;
	padding: 0;
	cursor: pointer;
	font-size: 1.5rem;
`;

const StyledRow = styled.span`
	display: inline-flex;
	width: 25rem;
	min-height: 2.2344rem;
	align-items: center;
	gap: 5px;
	padding: 0 0.4rem;
`;

function CardImage() {
	const { t } = useTranslation();
	const card = useCard<{ imageUrl?: string }>();
	const { updateCardExtras } = useBoard();

	const [editing, setEditing] = useState(!card.imageUrl);
	const [input, setInput] = useState(card.imageUrl ?? "");

	function handleEditClick() {
		setEditing(true);
		setInput(card.imageUrl ?? "");
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	function handleSave() {
		if (input) {
			updateCardExtras(card, {"imageUrl": input});
			setEditing(false);
		}
	}

	return (
		<Card expand={true} resize="horizontal">
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>


			{editing ? (
				<>
					<BtnTooltip right="3rem">
						{t("cardImage.tip")}
					</BtnTooltip>

					<StyledRow>
						<StyledButton onClick={handleSave}>
							<TbPhotoShare/>
						</StyledButton>
						<StyledInput
							value={input}
							onChange={handleInputChange}
							onKeyDown={(e) => e.key === "Enter" && handleSave()}
							placeholder={t("cardImage.placeholder")}
						/>
					</StyledRow>
				</>
			) : (
				<>
					<BtnEdit right="3rem" onClick={handleEditClick}/>
					
					<StyledView src={card.imageUrl}/>
				</>
			)}
		</Card>
	);
}

export default CardImage;
