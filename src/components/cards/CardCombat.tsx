import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardCombat() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardCombat.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p><Translate i18nKey="cardCombat.movement"/></p>
			<p><Translate i18nKey="cardCombat.choose"/></p>
			<List>
				<Translate i18nKey="cardCombat.list.attack"/>
				<Translate i18nKey="cardCombat.list.condition"/>
				<Translate i18nKey="cardCombat.list.run"/>
				<Translate i18nKey="cardCombat.list.other"/>
			</List>
		</Card>
	);
}

export default CardCombat;
