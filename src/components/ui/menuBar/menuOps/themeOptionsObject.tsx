import { useTranslation } from "react-i18next";
import styled from "styled-components";

type HexColor = `#${string}`;

const Dot = styled.span<{ $color: HexColor }>`
	background: ${({ $color }) => $color};
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	margin: 0 2px;
`;

function makeComponent(translationKey: string, color1: HexColor, color2: HexColor, color3: HexColor) {
	return function CardContent() {
		const { t } = useTranslation();
		return (
			<>
				{t(translationKey)} <Dot $color={color1}/><Dot $color={color2}/><Dot $color={color3}/>
			</>
		);
	};
}

const AdjustReality = makeComponent("ui.themes.adjustReality", "#1e1834", "#54c1de", "#ee9afc");
const ElementalOrigin = makeComponent("ui.themes.elementalOrigin", "#d1e5fe", "#d1e5fe", "#3fcfa4");
const Flight = makeComponent("ui.themes.flight", "#382e61", "#2c7de6", "#ac36a4");
const Seaborne = makeComponent("ui.themes.seaborne", "#1c4c73", "#c7e469", "#d8aeaa");
const Tempest = makeComponent("ui.themes.tempest", "#223f2d", "#f33f4e", "#edd258");
const Wildborne = makeComponent("ui.themes.wildborne", "#fbf5e8", "#637e52", "#967b2f");

const themeOptionsObject = [
	{ nameKey: "ui.themes.adjustReality", call: "Adjust-Reality", content: <AdjustReality/> },
	{ nameKey: "ui.themes.elementalOrigin", call: "Elemental-Origin", content: <ElementalOrigin/> },
	{ nameKey: "ui.themes.flight", call: "Flight", content: <Flight/> },
	{ nameKey: "ui.themes.seaborne", call: "Seaborne", content: <Seaborne/> },
	{ nameKey: "ui.themes.tempest", call: "Tempest", content: <Tempest/> },
	{ nameKey: "ui.themes.wildborne", call: "Wildborne", content: <Wildborne/> }
];

export default themeOptionsObject;
