import { BtnClose, BtnDrag, BtnTooltip } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Card from "../atoms/Card.tsx";
import Die from "../atoms/Die.tsx";
import { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import styled from "styled-components";
import Field from "../atoms/Field.tsx";

const DiceButtons = styled.div`
	position: absolute;
	width: 27.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 0;
	gap: 5px;
`;

const DiceQueue = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0.5rem;
	margin-top: 3rem;
	padding: 1rem;
	background-color: var(--color-fg);
	border: solid 3px var(--color-accent-2);
	border-radius: 50px;
`;

const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	padding: 0 10px;
	align-items: center;
`;

const RollButton = styled.button`
	background-color: var(--color-bg);
	color: var(--color-text);
	font-size: 1rem;
	width: 6rem;
	height: 1.5rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: solid 2px var(--color-accent-1);
	border-radius: 15px;
	transition: all 0.4s ease;
	user-select: none;

	&:hover {
		background-color: var(--color-fg);
		transform: scale(1.05);
	}

	&:active {
		color: var(--color-accent-1);
		transform: scale(0.95);
	}
`;

const TrashButton = styled.button`
	display: flex;
	background-color: var(--color-bg);
	color: var(--color-text);
	font-size: 1rem;
	width: 2rem;
	height: 2rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: solid 2px var(--color-minus);
	border-radius: 1rem;
	transition: all 0.4s ease;

	&:hover {
		background-color: var(--color-fg);
		color: var(--color-minus);
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}
`;

const Results = styled.p`
	display: inline-flex;
	align-items: center;
	color: var(--color-accent-1);
	font-size: 1.5rem;
	font-weight: bold;
`;

type DieSpec = {
	dieType: string;
	sides: number;
	value: number;
	rolling: boolean;
};

function getRandInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CardDiceRoller() {
	const { t } = useTranslation();

	const [dice, setDice] = useState<DieSpec[]>([]);
	const [sideN, setSideN] = useState(100);
	const result = dice.reduce((sum, die) => sum + die.value, 0);

	function rollAll() {
		setDice(dice =>
			dice.map(die => ({
				...die,
				rolling: true
			}))
		);
		let frames = 0;
		const totalFrames = 20;
		const interval = setInterval(() => {
			setDice(dice =>
				dice.map(die => ({
					...die,
					value: getRandInt(1, die.sides)
				}))
			);
			frames++;
			if (frames >= totalFrames) {
				clearInterval(interval);
				setDice(dice =>
					dice.map(die => ({
						...die,
						value: getRandInt(1, die.sides),
						rolling: false
					}))
				);
			}
		}, 100);
		console.log(dice)
	}

	function addDie(dieType: string, sides: number) {
		setDice(dice => [
			...dice,
			{
				dieType,
				sides,
				value: sides,
				rolling: false,
			}
		]);
	}

	function addDuality() {
		setDice(dice => [
			...dice,
			{
				dieType: "hope",
				sides: 12,
				value: 12,
				rolling: false,
			},
			{
				dieType: "fear",
				sides: 12,
				value: 12,
				rolling: false,
			}
		]);
	}

	function removeDie(idx: number) {
		setDice(die => die.filter((_, i) => i !== idx));
	}

	function clearAll() {
		setDice([]);
	}

	return (
		<Card title={t("cardDiceRoller.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>
			<BtnTooltip right="3rem">
				<div style={{width: "14rem", textWrap: "wrap"}}>
					<p>
					{t("cardDiceRoller.tooltip")}</p>
					<p>
					{t("cardDiceRoller.tip")}</p>
				</div>
			</BtnTooltip>
			
			<DiceButtons>
				{[4, 6, 8, 10, 12, 20].map(N => {
					const dieType = "d" + N.toString();
					return (
						<Die
							key={dieType}
							dieType={dieType}
							value={dieType}
							size={"2.62rem"}
							textMult={1.5}
							onClick={() => addDie(dieType, N)}
						/>
					)
				})}
				<Die
					dieType={"d12"}
					value={"H/F"}
					size={"2.62rem"}
					textMult={1.5}
					onClick={() => addDuality()}
				/>
				<Field
					width="2.5rem"
					type="number"
					value={sideN}
					min={1}
					onChange={(event) => setSideN(Number(event.target.value))}
				/>
				<Die
					dieType={"circle"}
					value={"dN"}
					size={"2.62rem"}
					textMult={1.5}
					onClick={() => addDie("circle", sideN)}
				/>
			</DiceButtons>

			<DiceQueue>
				{dice.map((die, idx) => (
					<Die
						key={idx}
						dieType={die.dieType}
						value={die.value}
						size={"3.8rem"}
						rolling={die.rolling}
						onClick={() => removeDie(idx)}
					/>
				))}
			</DiceQueue>
			<Controls>
				<Controls>
					<RollButton onClick={rollAll} disabled={dice.length === 0}>
						{t("cardDiceRoller.roll")}
					</RollButton>
					<TrashButton onClick={clearAll} style={{ marginLeft: 6 }}>
						<IoTrashBinOutline />
					</TrashButton>
				</Controls>
				<Results>{t("cardDiceRoller.result")}: {result}</Results>
			</Controls>

		</Card>
	);
}

export default CardDiceRoller;
