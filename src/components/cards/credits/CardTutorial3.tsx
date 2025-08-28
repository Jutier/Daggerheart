import { BtnClose, BtnDrag } from "../../cardButtons";
import Card from "../../atoms/Card.tsx";
import { useTranslation } from "react-i18next";

function CardTutorial3() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardTutorial3.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p>{t("cardTutorial3.login")}</p>
			<p>{t("cardTutorial3.localStorage")}</p>
			<p>{t("cardTutorial3.export")}</p>
			<p>{t("cardTutorial3.pdf")}</p>
		</Card>
	);
}

export default CardTutorial3;
