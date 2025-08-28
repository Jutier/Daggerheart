import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useBoard from "../../../contexts/BoardContext";
import useTheme, { type Theme } from "../../../hooks/useTheme";
import cardOptionsObject from "./menuOps/cardOptionsObject";
import langOptionsObject from "./menuOps/langOptionsObject";
import themeOptionsObject from "./menuOps/themeOptionsObject";
import loadOptionsObject from "./menuOps/loadOptionsObject";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbCards } from "react-icons/tb";
import { IoSaveOutline } from "react-icons/io5";
import MenuButton from "./MenuButton";

const BottomBarContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 68px;
	z-index: 760;
	background-color: var(--color-fg);
	box-shadow: 0 -2px 16px -8px var(--color-bg);
	display: none;
	@media (max-width: 700px) {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 8px;
	}
`;

function BottomBar() {
	const { i18n } = useTranslation();
	const country = i18n.language.split("-")[1]?.toLowerCase() ?? "us";

	const { changeTheme } = useTheme();
	const { cardAdd } = useBoard();

	return (
		<>	
			<BottomBarContainer className="no-print">
				{/* Card Menu */}
				<MenuButton
					optionsObject={cardOptionsObject}
					funcSelec={cardAdd}
					width="18rem"
					opWidth="15.5rem"
					opHeight="3rem"
				>
					<TbCards size={30} />
				</MenuButton>
				{/* Theme Menu */}
				<MenuButton
					optionsObject={themeOptionsObject}
					funcSelec={(call: string) => { changeTheme(call as Theme) }}
					width="15rem"
					opWidth="12.5rem"
					opHeight="35px"
				>
					<IoColorPaletteOutline size={30} />
				</MenuButton>
				{/* Lang Menu */}
				<MenuButton
					optionsObject={langOptionsObject}
					funcSelec={i18n.changeLanguage}
					width="12rem"
					opWidth="10rem"
					opHeight="50px"
				>
					<img
						src={`https://flagcdn.com/${country}.svg`}
						alt={country}
						style={{
							width: 32,
							height: 30,
							objectFit: "cover",
							borderRadius: 5,
						}}
					/>
				</MenuButton>
				{/* Load Menu */}
				<MenuButton
					optionsObject={loadOptionsObject}
					funcSelec={console.log}
					width="15rem"
					opWidth="13rem"
					opHeight="45px"
				>
					<IoSaveOutline size={30} />
				</MenuButton>
			</BottomBarContainer>
		</>
	);
}

export default BottomBar;
