import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardAttributes() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardAttributes.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<List>
				<Translate i18nKey="cardAttributes.agility"/>
				<Translate i18nKey="cardAttributes.strength"/>
				<Translate i18nKey="cardAttributes.finesse"/>
				<Translate i18nKey="cardAttributes.instinct"/>
				<Translate i18nKey="cardAttributes.presence"/>
				<Translate i18nKey="cardAttributes.knowledge"/>
			</List>
		</Card>
	);
}

export default CardAttributes;
