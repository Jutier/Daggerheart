import { BtnClose, BtnTooltip, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import styled, { css } from "styled-components";

type DifficultyVariant = 'too-easy' | 'easy' | 'average' | 'hard' | 'too-hard';

const slopeStylesFor = ($variant: DifficultyVariant) => {
	switch ($variant) {
		case "too-easy":
			return css`
				height: 2.2rem;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
			`;
		case "easy":
			return css`
				height: 2.3rem;
				clip-path: polygon(0 0.1rem, 100% 0, 100% 100%, 0 100%);
			`;
		case "average":
			return css`
				height: 2.5rem;
				clip-path: polygon(0 0.2rem, 100% 0, 100% 100%, 0 100%);
			`;
		case "hard":
			return css`
				height: 2.8rem;
				clip-path: polygon(0 0.3rem, 100% 0, 100% 100%, 0 100%);
			`;
		case "too-hard":
			return css`
				height: 3.4rem;
				clip-path: polygon(0 0.6rem, 100% 0, 100% 100%, 0 100%);
			`;
		default:
			return css``;
	}
};

const Slopes = styled.span<{ $variant: DifficultyVariant }>`
	display: inline-flex;
	justify-content: center;
	align-items: flex-end;
	width: 4rem;
	font-weight: bold;
	font-size: 1.8rem;
	border-radius: 0 0 7px 7px;
	color: var(--color-bg);
	z-index: 2;
	background: var(--color-accent-1);

	${({ $variant }) => slopeStylesFor($variant)};
`;

const DifList = styled.ul`
	margin: 0 auto;
	padding: 0;
	display: flex;
	align-items: flex-end;
	list-style: none;
	gap: 0.2rem;
`;

const DifItem = styled.li`
	text-align: center;
	font-size: 0.8rem;
`;

const DifCrit = styled.li`
	padding: 1rem;
	margin-left: 6px;
	align-self: center;
	border: 3px solid var(--color-crit);
	border-radius: 20px;
	box-shadow:
		0 0 0 3px var(--color-hope),
		0 0 0 3px var(--color-fear) inset;
	text-align: center;
`;

function CardDifficulty() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardDifficulty.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>
			<BtnTooltip right="3rem">				
				<Translate i18nKey="cardDifficulty.tip"/>
			</BtnTooltip>

			<DifList>
				<DifItem>
					<Slopes $variant="too-easy">5</Slopes><br/>
					4.2–<span className="crit">1.4</span>%
				</DifItem>

				<DifItem>
					<Slopes $variant="easy">10</Slopes><br/>
					25.0–<span className="crit">2.8</span>%
				</DifItem>

				<DifItem>
					<Slopes $variant="average">15</Slopes><br/>
					61.8–<span className="crit">4.9</span>%
				</DifItem>

				<DifItem>
					<Slopes $variant="hard">20</Slopes><br/>
					89.6–<span className="crit">6.2</span>%
				</DifItem>
				<DifItem>
					<Slopes $variant="too-hard">25+</Slopes><br/>
					100–<span className="crit">8.3</span>%
				</DifItem>

				<DifCrit>
					<span className="crit">{t("cardDifficulty.crit")}<br/>
					8.33%</span>
				</DifCrit>
			</DifList>
		</Card>
	);
}

export default CardDifficulty;
