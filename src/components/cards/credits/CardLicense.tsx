import { BtnClose, BtnDrag } from "../../cardButtons";
import Card from "../../atoms/Card.tsx";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CompatibleImg = styled.img`
	content: var(--img-compatible);
	width: 100%
`;

function CardLicense() {
	const { t } = useTranslation();

	return (
		<Card title={t("cardLicense.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<CompatibleImg/>
			<div>{t("cardLicense.srd")}</div>
			<div>{t("cardLicense.license")}</div>
			<div>{t("cardLicense.fullLink")}
				<a
					href="https://www.daggerheart.com"
					target="_blank"
					rel="noopener noreferrer"
				>
    				https://www.daggerheart.com
 				</a>
 			</div>
		</Card>
	);
}

export default CardLicense;
