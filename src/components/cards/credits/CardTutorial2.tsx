import { BtnClose, BtnDrag } from "../../cardButtons";
import Card from "../../atoms/Card.tsx";
import { useTranslation } from "react-i18next";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDragDropLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { HiOutlineSquaresPlus } from "react-icons/hi2";

const MenuEx = styled.p`
	display: flex;
	align-items: center;
	gap: 0.5em;
`;

function CardTutorial2() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardTutorial2.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p>{t("cardTutorial2.names")}</p>
			<p>{t("cardTutorial2.space")}</p>
			<p>{t("cardTutorial2.buttons")}</p>
			<MenuEx>
				<IoInformationCircleOutline
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial2.tooltip")}
			</MenuEx>
			<MenuEx>
				<CiEdit
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial2.edit")}
			</MenuEx>
			<MenuEx>
				<RiDragDropLine
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial2.move")}
			</MenuEx>
			<MenuEx>
				<IoClose
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial2.close")}
			</MenuEx>
			<MenuEx>
				<HiOutlineSquaresPlus
					size={40}
					style={{
						color: "var(--color-accent-1)",
						flexShrink: "0"
					}}
				/>
				{t("cardTutorial2.newDeck")}
			</MenuEx>
		</Card>
	);
}

export default CardTutorial2;
