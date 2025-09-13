import { BtnClose, BtnDrag, BtnEdit } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import { PlusButton, MinusButton } from "../deltaButtons";
import Card from "../atoms/Card.tsx";
import styled from "styled-components";
import useBoard from "../../contexts/BoardContext.ts";
import useCard from "../../contexts/CardContext.ts";
import { useState } from "react";
import Field from "../atoms/Field.tsx";

const Content = styled.div`
	display: flex;
	padding: 0 0;
`;


const ValueBox = styled.div`
	display: flex;
	width: 6rem;
	height: 6rem;
	border-radius: 2rem;
	background: var(--color-fg);
	align-items: center;
	justify-content: center;
	margin: 0 10px 0 0;
	color: var(--color-accent-1);
	font-size: 4rem;
	font-weight: bold;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	width: 6rem;
	justify-content: space-around;
    align-items: stretch;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const TotalRow = styled.div`
	display: flex;
	font-size: 1.5rem;
	font-weight: bold;
	align-items: center;
`;

const TotalBox = styled.div`
	display: flex;
	width: 3.5rem;
	height: 3rem;
	border-radius: 1rem;
	background: var(--color-fg);
	align-items: center;
	justify-content: center;
	margin: 0 0 0 10px;
`;

function CardCountdown() {
	const card = useCard<{
		name?: string,
		total?: number,
		value?: number,
	}>();
	const { updateCardExtras } = useBoard();
	const { t } = useTranslation();

	const [isEditing, setIsEditing] = useState(false);

	function handleEdit() {
		setIsEditing(!isEditing);
	}

	return (
		<Card
			style={{ maxWidth: "14rem" }}
			cardTitle={isEditing ? (
				<Field
					width="8rem"
					value={card.name}
					onChange={(event) => updateCardExtras(card, {"name":  event.target.value})}
					placeholder={t("cardCountdown.title")}
				/>
			) : (
				<span>{card.name || t("cardCountdown.title")}</span>
			)}
		>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>
			<BtnEdit right="3rem" onClick={handleEdit}/>

			<Content>

				<ValueBox>
					{isEditing ? (
						<Field
							width="3rem"
							type="number"
							value={card.value}
							onChange={(event) => updateCardExtras(card, {"value": Number(event.target.value)})}
							placeholder="0"
						/>
					) : (
						<p>{card.value}</p>
					)}
				</ValueBox>

				<Col>
					<ButtonRow>
						<MinusButton
							state={card.value || 0}
							setState={(value) => updateCardExtras(card, {"value": Number(value)})}
						/>
						<PlusButton
							state={card.value || 0}
							setState={(value) => updateCardExtras(card, {"value": Number(value)})}
						/>
					</ButtonRow>

					<TotalRow>
						/
						<TotalBox>
							{isEditing ? (
								<Field
									width="2rem"
									type="number"
									value={card.total}
									onChange={(event) => updateCardExtras(card, {"total": Number(event.target.value)})}
									placeholder="0"
								/>
							) : (
								<p>{card.total}</p>
							)}
						</TotalBox>
					</TotalRow>
				</Col>
			</Content>
		</Card>
	);
}

export default CardCountdown;
