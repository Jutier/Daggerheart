import { BtnClose, BtnDrag } from "../../cardButtons";
import { useTranslation } from 'react-i18next'
import Card from "../../atoms/Card.tsx";
import styled from "styled-components";

const KoFi = styled.img`
	width: 8rem;
	position: absolute;
	right: 1.9rem;
	bottom: 0.9rem;
`;

function CardSupport() {
	const { t } = useTranslation();

	return (
		<Card cardTitle={t("cardSupport.title")}>
			<BtnClose right="0.2rem"/>
			<BtnDrag right="1.6rem"/>

			<span>
				<p>{t("cardSupport.repo")}
					<a
						href="https://github.com/Jutier/Daggerheart"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>
				<p>{t("cardSupport.support")}</p>
				<p>
					{t("cardSupport.kofi")} <a
						href="https://ko-fi.com/jutier"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ko-Fi
					</a>
					<a
						href="https://ko-fi.com/jutier"
						target="_blank"
						rel="noopener noreferrer"
					>
						<KoFi src="assets/kofi.webp"/>
					</a>
				</p>
			</span>
		</Card>
	);
}

export default CardSupport;
