import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardConditions() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardConditions.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<List>
				<Translate i18nKey="cardConditions.hidden"/>
				<Translate i18nKey="cardConditions.vulnerable"/>
				<Translate i18nKey="cardConditions.restrained"/>
			</List>
		</Card>
	);
}

export default CardConditions;
