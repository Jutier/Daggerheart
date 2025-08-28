import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import List from "../atoms/List.tsx";
import styled from "styled-components";

const StyledHeading = styled.h3`
	margin: 0 auto;
`;

function CardRolls() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardRolls.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<List>
				<>
					<StyledHeading>{t("cardRolls.action.title")}</StyledHeading>
					<p><Translate i18nKey="cardRolls.action.description"/></p>
					<p><Translate i18nKey="cardRolls.action.note"/></p>
				</>
				<>
					<StyledHeading>{t("cardRolls.reaction.title")}</StyledHeading>
					<p><Translate i18nKey="cardRolls.reaction.description"/></p>
				</>
				<>
					<StyledHeading>{t("cardRolls.attack.title")}</StyledHeading>
					<p><Translate i18nKey="cardRolls.attack.description"/></p>
					<p><Translate i18nKey="cardRolls.attack.note"/></p>
				</>
				<>
					<StyledHeading>{t("cardRolls.damage.title")}</StyledHeading>
					<p><Translate i18nKey="cardRolls.damage.description"/></p>
				</>
			</List>
		</Card>
	);
}

export default CardRolls;
