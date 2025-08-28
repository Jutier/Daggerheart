import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";

function CardArmrStrss() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardArmrStrss.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p><Translate i18nKey="cardArmrStrss.armor"/></p>
			<p><Translate i18nKey="cardArmrStrss.stress"/></p>
		</Card>
	);
}

export default CardArmrStrss;
