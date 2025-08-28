import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardFear() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardFear.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>
			
			<p><Translate i18nKey="cardFear.acquire"/></p>
			<p><Translate i18nKey="cardFear.usage"/></p>

			<List>
				<Translate i18nKey="cardFear.list.interrupt"/>
				<Translate i18nKey="cardFear.list.experience"/>
				<Translate i18nKey="cardFear.list.effects"/>
				<Translate i18nKey="cardFear.list.additional"/>
			</List>
		</Card>
	);
}

export default CardFear;
