import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Card from "../atoms/Card.tsx";
import styled from "styled-components";

const StyledImg = styled.img`
	display: inline-block;
	width: 100%;
	border-radius: 12px;
`;

function CardSpotlight() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardSpotlight.title")} expand={true}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<StyledImg src={t("cardSpotlight.imageSrc")}/>
		</Card>
	);
}

export default CardSpotlight;
