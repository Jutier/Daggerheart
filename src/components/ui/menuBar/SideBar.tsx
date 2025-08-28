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

const SidebarContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	box-sizing: border-box;
	height: 100%;
	width: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-fg);
	padding: 20px;
	gap: 15px;
	z-index: 750;
	box-shadow: 5px 0 30px -25px var(--color-bg);

	@media (max-width: 700px) {
		display: none;
	}
`;

const LogoContainer = styled.div`
	position: relative;
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background-color: #1a162f;
`;

const Logo = styled.img`
	width: 58px;
	position: absolute;
	bottom: 4px;
	left: 1px;
`;

const Line = styled.hr`
	border: 1px solid var(--color-accent-1);
	border-radius: 50px;
	width: 150%;
	margin: 0;
`;

const AlignmentBox = styled.div<{ $align: string }>`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	gap: 15px;
	justify-content: ${({ $align }) => $align};
`;

function Sidebar() {
	const { i18n } = useTranslation();
	const country = i18n.language.split("-")[1]?.toLowerCase() ?? "us";

	const { changeTheme } = useTheme();
	const { cardAdd } = useBoard();
	return (
		<>
			<SidebarContainer className="no-print">
				<LogoContainer>
					<Logo src="assets/icon.png" />
				</LogoContainer>
				<Line />
				<AlignmentBox $align='flex-start'>
					{/* Card Menu */}
					<MenuButton
						optionsObject={cardOptionsObject}
						funcSelec={cardAdd}
						width="1085px"
						opWidth="15.5rem"
						opHeight="3rem"
					>
						<TbCards size={30} />
					</MenuButton>
				</AlignmentBox>
				<AlignmentBox $align='flex-end'>
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
					{/* Language Menu */}
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
				</AlignmentBox>
			</SidebarContainer>
		</>
	);
}

export default Sidebar;
