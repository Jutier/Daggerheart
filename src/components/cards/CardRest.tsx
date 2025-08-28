import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardRest() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardRest.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p><Translate i18nKey="cardRest.cards"/></p>
			<p><Translate i18nKey="cardRest.cost"/></p>
			<p><Translate i18nKey="cardRest.choose"/></p>
			<Table>
				<Head>
					<Translate i18nKey="cardRest.head.action"/>
					<Translate i18nKey="cardRest.head.shortRest"/>
					<Translate i18nKey="cardRest.head.longRest"/>
				</Head>
				<Body>
					<Translate i18nKey="cardRest.tendWounds.action"/>
					<Translate i18nKey="cardRest.tendWounds.shortRest"/>
					<Translate i18nKey="cardRest.tendWounds.longRest"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRest.clearStress.action"/>
					<Translate i18nKey="cardRest.clearStress.shortRest"/>
					<Translate i18nKey="cardRest.clearStress.longRest"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRest.repairArmor.action"/>
					<Translate i18nKey="cardRest.repairArmor.shortRest"/>
					<Translate i18nKey="cardRest.repairArmor.longRest"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRest.prepare.action"/>
					<Translate i18nKey="cardRest.prepare.shortRest"/>
					<Translate i18nKey="cardRest.prepare.longRest"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRest.project.action"/>
					<Translate i18nKey="cardRest.project.shortRest"/>
					<Translate i18nKey="cardRest.project.longRest"/>
				</Body>
			</Table>
			<Translate i18nKey="cardRest.ally"/>
		</Card>
	);
}

export default CardRest;
