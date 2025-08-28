import { useState } from "react";
import { BtnClose, BtnDrag, BtnTooltip } from "../cardButtons/";
import Card from "../atoms/Card.tsx";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Field from "../atoms/Field.tsx";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const TipColumn = styled.div`
	display: inline-flex;
	flex-direction: column;
	gap: 5px;
`;

const TipItem = styled.div`
	text-wrap: auto;
	padding-left: 15px;
`;

const PlayerNPoints = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 1rem;
	align-items: center;
`;

const Player = styled.span`
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Points = styled.p`
	display: inline-flex;
	align-items: center;
	color: var(--color-accent-1);
	font-size: 1.5rem;
	font-weight: bold;
`;

const Line = styled.hr`
	border: 1px solid var(--color-accent-1);
	border-radius: 50px;
`;

const Column = styled.div`
	display: inline-flex;
	width: 50%;
	flex-direction: column;
	gap: 11px;
`;

const AdjLabel = styled.label`
	display: flex;
	align-items: center;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
	appearance: none;
	width: 45px;
	height: 22px;
	background: var(--color-fg);
	border-radius: 11px;
	position: relative;
	cursor: pointer;
	flex: 0 0 auto;

	&::before {
		content: "";
		position: absolute;
		width: 18px;
		height: 18px;
		left: 3px;
		top: 2px;
		background: var(--color-accent-2);
		border-radius: 50%;
		transition: all 0.2s ease-out;
	}

	&:checked::before {
		background: var(--color-accent-1);
		transform: translateX(21px);
	}
`;

const AddAdv = styled.div`
	display: flex;
	padding: 0 7px;
	justify-content: space-between;
	align-items: center;
`;

const StyledSelect = styled.select`
	width: 82%;
	background-color: var(--color-fg);
	color: var(--color-text);
	outline: solid 2px var(--color-accent-2);
	border: none;
	border-radius: 0.7rem;
	padding: 0.2rem 0.4rem;
	font-size: 1rem;

	&:focus {
		outline-color: var(--color-accent-1);
	}
`;

const StyledButton = styled.button<{ $color: string }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	color: var(--color-text);
	border: 3px solid ${({ $color }) => $color};
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
		color: ${({ $color }) => $color};
	}

	&:active {
		transform: scale(0.96);
	}
`;

const AdvList = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: column;
	align-items: flex-end;
	gap: 8px;
	margin: 0;
	padding: 0 0 0 26px;
`;

const AdvCost = styled.em`
	margin: 0 7px 0 auto;
	color: var(--color-accent-1)
`;

const AdvItem = styled.li`
	display: flex;
	width: 100%;
	padding: 0 7px;
`;

function CardBattlePoints() {
	const { t } = useTranslation();

	const [numPCs, setNumPCs] = useState(4);
	const [adjusts, setAdjusts] = useState({
		easy: false,
		hard: false,
		bonusDmg: false,
		lowerTier: false,
		twoSolos: false,
		smallBunch: false,
	});
	const [adversaries, setAdversaries] = useState<string[]>([]);

	const advCosts = {
		minions: 1,
		social: 1,
		support: 1,
		horde: 2,
		ranged: 2,
		skulk: 2,
		standard: 2,
		leader: 3,
		bruiser: 4,
		solo: 5,
	};

	const [advCat, setAdvCat] = useState("standard");
	const categories = t("cardAdversary.categories", { returnObjects: true });

	function addAdversary(category: string) {
		setAdversaries((prev) => [...prev, category]);
	}

	function calculateBP() {
		const points = (3 * numPCs) + 2
			+ (adjusts.easy ? -1 : 0)
			+ (adjusts.hard ? +2 : 0)
			+ (adjusts.bonusDmg ? -2 : 0)
			+ (adjusts.lowerTier ? +1 : 0)
			+ (adjusts.twoSolos ? -2 : 0)
			+ (adjusts.smallBunch ? +1 : 0);

		const spent = adversaries.reduce((spent, adv) => spent + advCosts[adv as keyof typeof advCosts], 0);

		return { points, spent };
	}

	const results = calculateBP();

	return (
		<Card cardTitle={t("cardBattlePoints.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>
			<BtnTooltip right="3rem">
				<TipColumn style={{width: "58%", textAlign: "start"}}>
					<strong>{t("cardBattlePoints.adjustments")}</strong>
					<span>{t("cardBattlePoints.adjusts.easy")}: <strong>(-1)</strong></span>
					<TipItem>{t("cardBattlePoints.tooltip.easy")}</TipItem>
					<span>{t("cardBattlePoints.adjusts.hard")}: <strong>(+2)</strong></span>
					<TipItem>{t("cardBattlePoints.tooltip.hard")}</TipItem>
					<span>{t("cardBattlePoints.adjusts.bonusDmg")}: <strong>(-2)</strong></span>
					<TipItem>{t("cardBattlePoints.tooltip.bonusDmg")}</TipItem>
					<span>{t("cardBattlePoints.adjusts.lowerTier")}: <strong>(+1)</strong></span>
					<TipItem>{t("cardBattlePoints.tooltip.lowerTier")}</TipItem>
					<span>{t("cardBattlePoints.adjusts.twoSolos")}: <strong>(-2)</strong></span>
					<TipItem>{t("cardBattlePoints.tooltip.twoSolos")}</TipItem>
					<span>{t("cardBattlePoints.adjusts.smallBunch")}: <strong>(+1)</strong></span>
					<TipItem>{t("cardBattlePoints.tooltip.smallBunch")}</TipItem>
				</TipColumn>
				<TipColumn style={{width: "fit-content", textAlign: "end"}}>
					<strong>{t("cardBattlePoints.adversaries")}</strong>
					<div>{t("cardAdversary.categories.bruiser")}: <strong>(-4)</strong></div>
					<div>{t("cardAdversary.categories.horde")}: <strong>(-2)</strong></div>
					<div>{t("cardAdversary.categories.leader")}: <strong>(-3)</strong></div>
					<div>{t("cardAdversary.categories.minions")}: <strong>(-1)</strong></div>
					<div>{t("cardAdversary.categories.ranged")}: <strong>(-2)</strong></div>
					<div>{t("cardAdversary.categories.skulk")}: <strong>(-2)</strong></div>
					<div>{t("cardAdversary.categories.social")}: <strong>(-1)</strong></div>
					<div>{t("cardAdversary.categories.solo")}: <strong>(-5)</strong></div>
					<div>{t("cardAdversary.categories.standard")}: <strong>(-2)</strong></div>
					<div>{t("cardAdversary.categories.support")}: <strong>(-1)</strong></div>
				</TipColumn>
			</BtnTooltip>

			<PlayerNPoints>
				<Player>{t("cardBattlePoints.players")}:
				<Field
					width="2rem"
					type="number"
					value={numPCs}
					min={0}
					onChange={(event) => setNumPCs(Number(event.target.value))}
				/></Player>
				<Points>{t("cardBattlePoints.points")}: {results.points - results.spent}</Points>
			</PlayerNPoints>
			<Line/>

			<Column>
				<h4 style={{margin: "0 auto"}}>
					{t("cardBattlePoints.adjustments")}
				</h4>
				{Object.keys(adjusts).map((key) => (
					<AdjLabel key={key}>
						<Checkbox
							checked={adjusts[key as keyof typeof adjusts]}
							onChange={() =>
								setAdjusts((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
							}
						/>
						{t(`cardBattlePoints.adjusts.${key}`)}
					</AdjLabel>
				))}
			</Column>
			<Column>
				<h4 style={{margin: "0 auto"}}>
					{t("cardBattlePoints.adversaries")}
				</h4>

				<AddAdv>
					<StyledSelect
						value={advCat}
						onChange={(event) => setAdvCat(event.target.value)}
					>
						{Object.entries(categories).map(([key, label]) => (
							<option key={key} value={key}>
								{label}
							</option>
						))}
					</StyledSelect>

					<StyledButton
						$color="var(--color-plus)"
						onClick={() => addAdversary(advCat)}
					>
						<TiPlus/>
					</StyledButton>
				</AddAdv>
				<AdvList>
					{adversaries.map((adv, idx) => (
						<AdvItem key={idx}>
							{t(`cardAdversary.categories.${adv}`)} <AdvCost>- {advCosts[adv as keyof typeof advCosts]}</AdvCost>
							<StyledButton
								$color="var(--color-minus)"
								onClick={() =>
								setAdversaries((prev) => prev.filter((_, i) => i !== idx))}
							>
								<TiMinus/>
							</StyledButton>
						</AdvItem>
					))}
				</AdvList>
			</Column>
		</Card>
	);
}

export default CardBattlePoints;
