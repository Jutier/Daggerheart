import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardCountdownRules() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardCountdownRules.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p>{t("cardCountdownRules.countdowns")}</p>
			<p>{t("cardCountdownRules.advanced")}</p>

			<List>
				<Translate i18nKey="cardCountdownRules.standard"/>
				<Translate i18nKey="cardCountdownRules.dynamic"/>
			</List>

			<Table>
				<Head>
					<Translate i18nKey="cardCountdownRules.head.rollResult"/>
					<Translate i18nKey="cardCountdownRules.head.positive"/>
					<Translate i18nKey="cardCountdownRules.head.negative"/>
				</Head>
				<Body>
					<Translate i18nKey="cardCountdownRules.failFear.rollResult"/>
					<Translate i18nKey="cardCountdownRules.failFear.positive"/>
					<Translate i18nKey="cardCountdownRules.failFear.negative"/>
				</Body>
				<Body>
					<Translate i18nKey="cardCountdownRules.failHope.rollResult"/>
					<Translate i18nKey="cardCountdownRules.failHope.positive"/>
					<Translate i18nKey="cardCountdownRules.failHope.negative"/>
				</Body>
				<Body>
					<Translate i18nKey="cardCountdownRules.successFear.rollResult"/>
					<Translate i18nKey="cardCountdownRules.successFear.positive"/>
					<Translate i18nKey="cardCountdownRules.successFear.negative"/>
				</Body>
				<Body>
					<Translate i18nKey="cardCountdownRules.successHope.rollResult"/>
					<Translate i18nKey="cardCountdownRules.successHope.positive"/>
					<Translate i18nKey="cardCountdownRules.successHope.negative"/>
				</Body>
				<Body>
					<Translate i18nKey="cardCountdownRules.crit.rollResult"/>
					<Translate i18nKey="cardCountdownRules.crit.positive"/>
					<Translate i18nKey="cardCountdownRules.crit.negative"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardCountdownRules;
