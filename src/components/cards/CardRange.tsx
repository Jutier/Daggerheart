import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardRange() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardRange.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<Table>
				<Head>
					<Translate i18nKey="cardRange.head.distance"/>
					<Translate i18nKey="cardRange.head.fall"/>
				</Head>
				<Body>
					<Translate i18nKey="cardRange.melee.distance"/>
					<Translate i18nKey="cardRange.melee.fall"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRange.vClose.distance"/>
					<Translate i18nKey="cardRange.vClose.fall"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRange.close.distance"/>
					<Translate i18nKey="cardRange.close.fall"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRange.far.distance"/>
					<Translate i18nKey="cardRange.far.fall"/>
				</Body>
				<Body>
					<Translate i18nKey="cardRange.vFar.distance"/>
					<Translate i18nKey="cardRange.vFar.fall"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardRange;
