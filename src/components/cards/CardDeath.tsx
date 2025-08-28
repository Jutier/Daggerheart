import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardDeath() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardDeath.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<List>
				<Translate i18nKey="cardDeath.avoid"/>
				<Translate i18nKey="cardDeath.blaze"/>
				<Translate i18nKey="cardDeath.risk"/>
			</List>
			<Translate i18nKey="cardDeath.scar"/>
		</Card>
	);
}

export default CardDeath;
