import { BtnClose, BtnDrag } from "../cardButtons/";
import { useTranslation } from "react-i18next";
import Translate from "../ui/Translate.tsx";
import Card from "../atoms/Card.tsx";
import { Table, Head, Body } from "../atoms/Table.tsx";

function CardPrices() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardPrices.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<p style={{textAlign: "center"}}><Translate i18nKey="cardPrices.conversion"/></p>
			<Table>
				<Head>
					<Translate i18nKey="cardPrices.head.item"/>
					<Translate i18nKey="cardPrices.head.cost"/>
				</Head>
				<Body>
					<Translate i18nKey="cardPrices.meal.item"/>
					<Translate i18nKey="cardPrices.meal.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.standardRoom.item"/>
					<Translate i18nKey="cardPrices.standardRoom.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.luxuryRoom.item"/>
					<Translate i18nKey="cardPrices.luxuryRoom.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.ride.item"/>
					<Translate i18nKey="cardPrices.ride.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.mount.item"/>
					<Translate i18nKey="cardPrices.mount.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.tools.item"/>
					<Translate i18nKey="cardPrices.tools.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.fineClothes.item"/>
					<Translate i18nKey="cardPrices.fineClothes.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.luxuryClothes.item"/>
					<Translate i18nKey="cardPrices.luxuryClothes.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.t1Equip.item"/>
					<Translate i18nKey="cardPrices.t1Equip.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.t2Equip.item"/>
					<Translate i18nKey="cardPrices.t2Equip.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.t3Equip.item"/>
					<Translate i18nKey="cardPrices.t3Equip.cost"/>
				</Body>
				<Body>
					<Translate i18nKey="cardPrices.t4Equip.item"/>
					<Translate i18nKey="cardPrices.t4Equip.cost"/>
				</Body>
			</Table>
		</Card>
	);
}

export default CardPrices;
