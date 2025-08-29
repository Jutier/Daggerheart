import { BtnClose, BtnDrag, BtnEdit } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import { PlusButton, MinusButton } from "../deltaButtons";
import Card from "../atoms/Card.tsx";
import styled from "styled-components";
import useBoard from "../../contexts/BoardContext.ts";
import useCard from "../../contexts/CardContext.ts";
import { useState } from "react";
import Field from "../atoms/Field.tsx";
import { PiListPlus } from "react-icons/pi";
import { TiMinus } from "react-icons/ti";


const Category = styled.div`
	font-weight: bold;
	text-align: center;
`;

const StatsRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DmgType = styled.span`
	font-weight: 350;
	font-size: 0.8rem;
	opacity: 0.9;
`;

const Line = styled.hr`
	border: 1px solid var(--color-accent-1);
	border-radius: 50px;
`;

const FeatName = styled.span`
	font-weight: bold;
`;

const FeatDesc = styled.span`
	white-space: normal;
	word-break: break-word;
`;

const FeatAddButton = styled.button`
	display: flex;
	background-color: var(--color-bg);
	color: var(--color-text);
	font-size: 1rem;
	height: 1.7rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: solid 2px var(--color-accent-1);
	border-radius: 15px;
	width: 50%;
	margin: 5px 25%;
	transition: all 0.4s ease;

	&:hover {
		background-color: var(--color-fg);
		transform: scale(1.05);
	}

	&:active {
		color: var(--color-accent-1);
		transform: scale(0.95);
	}
`;

const FeatRemoveButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	color: var(--color-text);
	border: 3px solid var(--color-minus);
	width: 1.2rem;
	height: 1.2rem;
	aspect-ratio: 1;
	border-radius: 50%;
	background: none;
	cursor: pointer;
	margin: 0 4px;
	padding: 0;
	transition: all 0.2s ease-out;

	&:hover {
		color: var(--color-minus);
	}

	&:active {
		transform: scale(0.96);
	}
`;

interface Feat {
	name: string;
	desc: string;
}

function CardAdversary() {
	const card = useCard<{
		name?: string,
		tier?: number,
		category?: string,
		atkMod?: string,
		difficulty?: string,
		thresholds?: string,
		hpMax?: number,
		hpCur?: number,
		stressMax?: number,
		stressCur?: number,
		atkName?: string,
		atkDamage?: string,
		atkRange?: string,
		dmgType?: string,
		feats?: Feat[]
	}>();
	const { updateCardExtras } = useBoard();
	const { t } = useTranslation();

	const [isEditing, setIsEditing] = useState(false);

	const [localCopy, setLocalCopy] = useState(() => ({
		name: card.name ?? "",
		tier: card.tier ?? 0,
		category: card.category ?? "",
		atkMod: card.atkMod ?? "",
		difficulty: card.difficulty ?? "",
		thresholds: card.thresholds ?? "",
		hpMax: card.hpMax ?? 0,
		hpCur: card.hpCur ?? 0,
		stressMax: card.stressMax ?? 0,
		stressCur: card.stressCur ?? 0,
		atkName: card.atkName ?? "",
		atkDamage: card.atkDamage ?? "",
		atkRange: card.atkRange ?? "",
		dmgType: card.dmgType ?? "",
		feats: card.feats ? [...card.feats] : []
	}));

	function handleDelta(field: string, value: number){
		updateCardExtras(card, { [field]: value });
		setLocalCopy((prev) => ({ ...prev, [field]: value }));
	}

	function handleEditEnemy() {
		if (isEditing){
			updateCardExtras(card, localCopy)
		}
		setIsEditing(!isEditing);
	}

	function handleFieldChange(field: string, type: "text" | "number" | "name" | "desc", value: string | number, index?: number) {
		setLocalCopy((prev) => {
			switch (type) {
				case "number":
					return { ...prev, [field]: Number(value) };
				case "text":
					return { ...prev, [field]: value };
				case "name":
				case "desc":
					if (typeof index === "number") {
						const newFeats = [...(prev.feats ?? [])];
						newFeats[index] = { ...newFeats[index], [type]: value };
						return { ...prev, feats: newFeats };
					}
					return prev;
				default:
					return prev;
				}
		});
	}

//Field({ width, type="text", value, changeFunc, placeholder, options, ...props }
	return (
		<Card cardTitle={isEditing ? (
			<Field
				width="20rem"
				value={localCopy.name}
				onChange={(event) => handleFieldChange("name", "text", event.target.value)}
				placeholder={t("cardAdversary.placeholders.name")}
			/>
		) : (
			<span>{localCopy.name}</span>
		)}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>
			<BtnEdit right="3rem" onClick={handleEditEnemy}/>

			<Category>
				{t("cardAdversary.tier")} {isEditing ? (
					<Field
						width="2rem"
						type="number"
						value={localCopy.tier}
						onChange={(event) => handleFieldChange("tier", "number", event.target.value)}
						placeholder={t("cardAdversary.placeholders.tier")}
					/>
				) : (
					<span>{localCopy.tier}</span>
				)} - {isEditing ? (
					<Field
						width="8rem"
						value={localCopy.category}
						onChange={(event) => handleFieldChange("category", "text", event.target.value)}
						placeholder={t("cardAdversary.placeholders.category")}
						options={Object.values(t("cardAdversary.categories", { returnObjects: true }))}
					/>
				) : (
					<span>{localCopy.category}</span>
				)}
			</Category>

			<div>
				<StatsRow>
					<div>
						{isEditing ? (
							<Field
								width="8rem"
								value={localCopy.atkName}
								onChange={(event) => handleFieldChange("atkName", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.atkName")}
							/>
						) : (
							<strong>{localCopy.atkName}</strong>
						)}: {isEditing ? (
							<Field
								width="8rem"
								value={localCopy.atkRange}
								onChange={(event) => handleFieldChange("atkRange", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.atkRange")}
							/>
						) : (
							<span>{localCopy.atkRange}</span>
						)} - {isEditing ? (
							<Field
								width="5rem"
								value={localCopy.atkDamage}
								onChange={(event) => handleFieldChange("atkDamage", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.atkDamage")}
							/>
						) : (
							<span>{localCopy.atkDamage}</span>
						)} {isEditing ? (
							<Field
								width="6rem"
								value={localCopy.dmgType}
								onChange={(event) => handleFieldChange("dmgType", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.dmgType")}
								options={[t("cardAdversary.dmgPhy"), t("cardAdversary.dmgMag")]}
							/>
						) : (
							<DmgType>{localCopy.dmgType}</DmgType>
						)}
					</div>
					<div>
						{t("cardAdversary.threshold")}: {isEditing ? (
							<Field
								width="5rem"
								value={localCopy.thresholds}
								onChange={(event) => handleFieldChange("thresholds", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.threshold")}
							/>
						) : (
							<span>{localCopy.thresholds}</span>
						)}
					</div>
				</StatsRow>
				<StatsRow>
					<div>{t("cardAdversary.atk")}: {isEditing ? (
							<Field
								width="3rem"
								value={localCopy.atkMod}
								onChange={(event) => handleFieldChange("atkMod", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.atkMod")}
							/>
						) : (
							<span>{localCopy.atkMod}</span>
						)}
					</div>
					<div>
						{t("cardAdversary.hp")}: {isEditing ? (
							<Field
								width="2rem"
								type="number"
								value={localCopy.hpCur}
								onChange={(event) => handleFieldChange("hpCur", "number", event.target.value)}
								placeholder={t("cardAdversary.placeholders.hp")}
							/>
						) : (
							<>
								<MinusButton
									state={card.hpCur || 0}
									setState={(value) => handleDelta("hpCur", value )}
								/>
								<span>{localCopy.hpCur}</span>
							</>
						)} / {isEditing ? (
							<Field
								width="2rem"
								type="number"
								value={localCopy.hpMax}
								onChange={(event) => handleFieldChange("hpMax", "number", event.target.value)}
								placeholder={t("cardAdversary.placeholders.hp")}
							/>
						) : (
							<>
								<span>{localCopy.hpMax}</span>
								<PlusButton
									state={card.hpCur || 0}
									setState={(value) => handleDelta("hpCur", value )}
								/>
							</>
						)}
					</div>
				</StatsRow>
				<StatsRow>
					<div>
						{t("cardAdversary.diff")}: {isEditing ? (
							<Field
								width="3rem"
								value={localCopy.difficulty}
								onChange={(event) => handleFieldChange("difficulty", "text", event.target.value)}
								placeholder={t("cardAdversary.placeholders.diff")}
							/>
						) : (
							<span>{localCopy.difficulty}</span>
						)}
					</div>
					<div>
						{t("cardAdversary.stress")}: {isEditing ? (
							<Field
								width="2rem"
								type="number"
								value={localCopy.stressCur}
								onChange={(event) => handleFieldChange("stressCur", "number", event.target.value)}
								placeholder={t("cardAdversary.placeholders.stress")}
							/>
						) : (
							<>
								<MinusButton
									state={card.stressCur || 0}
									setState={(value) => handleDelta("stressCur", value )}
								/>
								<span>{localCopy.stressCur}</span>
							</>
						)} / {isEditing ? (
							<Field
								width="2rem"
								type="number"
								value={localCopy.stressMax}
								onChange={(event) => handleFieldChange("stressMax", "number", event.target.value)}
								placeholder={t("cardAdversary.placeholders.stress")}
							/>
						) : (
							<>
								<span>{localCopy.stressMax}</span>
								<PlusButton
									state={card.stressCur || 0}
									setState={(value) => handleDelta("stressCur", value )}
								/>
							</>
						)}
					</div>
				</StatsRow>
			</div>

			{localCopy.feats?.length > 0 && (
				<>
					<h4 style={{ margin: "1rem 0 0 0"}}>
						{t("cardAdversary.feats")}:
					</h4>
					<Line/>
					{localCopy.feats?.map((_, index) => (
						<div key={index}>
							{isEditing ? (
								<Field
									width="7rem"
									value={localCopy.feats[index].name}
									onChange={(event) => handleFieldChange("feat", "name", event.target.value, index)}
									placeholder={t("cardAdversary.placeholders.featName")}
								/>
							) : (
								<FeatName>{localCopy.feats[index].name}</FeatName>
							)}: {isEditing ? (
								<>
									<Field
										width="15.5rem"
										value={localCopy.feats[index].desc}
										onChange={(event) => handleFieldChange("feat", "desc", event.target.value, index)}
										placeholder={t("cardAdversary.placeholders.featDesc")}
									/>
									<FeatRemoveButton
										onClick={
											() => setLocalCopy((prev) => ({
												...prev,
												feats: prev.feats.filter((_, i) => i !== index)
											})
										)}
									>
										<TiMinus/>
									</FeatRemoveButton>
								</>
							) : (
								<FeatDesc>{localCopy.feats[index].desc}</FeatDesc>
							)}
						</div>
					))}
				</>
			)}
			{isEditing && (
				<FeatAddButton 
					onClick={() => {
						setLocalCopy((prev) => ({
							...prev, feats: [...(prev.feats || []), { name: "", desc: "" }]
						}));
					}}
				>
					<PiListPlus size={25} style={{verticalAlign: "center"}}/> {t("cardAdversary.feats")}
				</FeatAddButton>
			)}
		</Card>
	);
}

export default CardAdversary;
