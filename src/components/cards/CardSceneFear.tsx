import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardSceneFear() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardSceneFear.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<Table>
				<Head>
					<Translate i18nKey="cardSceneFear.head.scene"/>
					<Translate i18nKey="cardSceneFear.head.fear"/>
					<Translate i18nKey="cardSceneFear.head.desc"/>
				</Head>
				<Body>
					<Translate i18nKey="cardSceneFear.incidental.scene"/>
					<Translate i18nKey="cardSceneFear.incidental.fear"/>
					<Translate i18nKey="cardSceneFear.incidental.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardSceneFear.minor.scene"/>
					<Translate i18nKey="cardSceneFear.minor.fear"/>
					<Translate i18nKey="cardSceneFear.minor.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardSceneFear.standard.scene"/>
					<Translate i18nKey="cardSceneFear.standard.fear"/>
					<Translate i18nKey="cardSceneFear.standard.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardSceneFear.major.scene"/>
					<Translate i18nKey="cardSceneFear.major.fear"/>
					<Translate i18nKey="cardSceneFear.major.desc"/>
				</Body>
				<Body>
					<Translate i18nKey="cardSceneFear.climactic.scene"/>
					<Translate i18nKey="cardSceneFear.climactic.fear"/>
					<Translate i18nKey="cardSceneFear.climactic.desc"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardSceneFear;
