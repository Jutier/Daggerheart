import { BtnClose, BtnDrag } from "../../cardButtons";
import Card from "../../atoms/Card.tsx";
import { useTranslation } from "react-i18next";
import { TbCards } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import styled from "styled-components";

const MenuEx = styled.p`
	display: flex;
	align-items: center;
	gap: 0.5em;
`;


function CardTutorial1() {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const country = i18n.language.split("-")[1]?.toLowerCase() ?? "us";

	return (
		<Card cardTitle={t("cardTutorial1.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p>{t("cardTutorial1.welcome")}</p>
			<p>{t("cardTutorial1.diy")}</p>
			<p>{t("cardTutorial1.use")}</p>
			<p>{t("cardTutorial1.menus")}</p>
			<MenuEx>
				<TbCards
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial1.cards")}
			</MenuEx>
			<MenuEx>
				<IoColorPaletteOutline
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial1.theme")}
			</MenuEx>
			<MenuEx>
				<img
					src={`https://flagcdn.com/${country}.svg`}
					alt={country}
					style={{
						width: 40,
						height: 36,
						objectFit: "cover",
						borderRadius: 5,
					}}
				/>
				{t("cardTutorial1.lang")}
			</MenuEx>
			<MenuEx>
				<IoSaveOutline size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial1.save")}
			</MenuEx>
		</Card>
	);
}

export default CardTutorial1;
