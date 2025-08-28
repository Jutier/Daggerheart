import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";

function CardTeamwork() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardTeamwork.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<List>
				<Translate i18nKey="cardTeamwork.help"/>
				<Translate i18nKey="cardTeamwork.group"/>
				<Translate i18nKey="cardTeamwork.tagTeam"/>
			</List>
		</Card>
	);
}

export default CardTeamwork;
