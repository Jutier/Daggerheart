import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardAdversaryStats() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardAdversaryStats.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<Table>
				<Head>
					<Translate i18nKey="cardAdversaryStats.head.tier"/>
					<Translate i18nKey="cardAdversaryStats.head.attack"/>
					<Translate i18nKey="cardAdversaryStats.head.damage"/>
					<Translate i18nKey="cardAdversaryStats.head.evasion"/>
					<Translate i18nKey="cardAdversaryStats.head.threshold"/>
				</Head>
				<Body>
					<Translate i18nKey="cardAdversaryStats.one.tier"/>
					<Translate i18nKey="cardAdversaryStats.one.attack"/>
					<Translate i18nKey="cardAdversaryStats.one.damage"/>
					<Translate i18nKey="cardAdversaryStats.one.evasion"/>
					<Translate i18nKey="cardAdversaryStats.one.threshold"/>
				</Body>
				<Body>
					<Translate i18nKey="cardAdversaryStats.two.tier"/>
					<Translate i18nKey="cardAdversaryStats.two.attack"/>
					<Translate i18nKey="cardAdversaryStats.two.damage"/>
					<Translate i18nKey="cardAdversaryStats.two.evasion"/>
					<Translate i18nKey="cardAdversaryStats.two.threshold"/>
				</Body>
				<Body>
					<Translate i18nKey="cardAdversaryStats.three.tier"/>
					<Translate i18nKey="cardAdversaryStats.three.attack"/>
					<Translate i18nKey="cardAdversaryStats.three.damage"/>
					<Translate i18nKey="cardAdversaryStats.three.evasion"/>
					<Translate i18nKey="cardAdversaryStats.three.threshold"/>
				</Body>
				<Body>
					<Translate i18nKey="cardAdversaryStats.four.tier"/>
					<Translate i18nKey="cardAdversaryStats.four.attack"/>
					<Translate i18nKey="cardAdversaryStats.four.damage"/>
					<Translate i18nKey="cardAdversaryStats.four.evasion"/>
					<Translate i18nKey="cardAdversaryStats.four.threshold"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardAdversaryStats;
