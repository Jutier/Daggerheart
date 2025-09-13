import { useTranslation } from "react-i18next";
import { GiSpikedDragonHead } from "react-icons/gi";
import { BiStats } from "react-icons/bi";
import { GiHeartShield } from "react-icons/gi";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoCalculator } from "react-icons/io5";
import { GiSwordClash } from "react-icons/gi";
import { GiDropWeapon } from "react-icons/gi";
import { TbClockSearch } from "react-icons/tb";
import { TbClockHour8 } from "react-icons/tb";
import { GiTombstone } from "react-icons/gi";
import { GiRollingDices } from "react-icons/gi";
import { PiLadder } from "react-icons/pi";
import { FaCrow } from "react-icons/fa6";
import { IoSkullOutline } from "react-icons/io5";
import { GiPeaceDove } from "react-icons/gi";
import { IoImageOutline } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { FaBed } from "react-icons/fa6";
import { TbCakeRoll } from "react-icons/tb";
import { GiHidden } from "react-icons/gi";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { GiTheaterCurtains } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { PiCursorText } from "react-icons/pi";
import { BsMortarboardFill } from "react-icons/bs";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbLicense } from "react-icons/tb";

function makeComponent(translationKey: string, icon?: React.ReactNode) {
	return function CardContent() {
		const { t } = useTranslation();
		return (
			<>
				{icon} {t(translationKey)}
			</>
		);
	};
}

const Adversary = makeComponent("cardAdversary.title", <GiSpikedDragonHead size={30} style={{ margin: "0 5px" }}/>);
const AdversaryStats = makeComponent("cardAdversaryStats.title", <BiStats size={30} style={{ margin: "0 5px" }}/>);
const ArmrStrss = makeComponent("cardArmrStrss.title", <GiHeartShield size={30} style={{ margin: "0 5px" }}/>);
const Attributes = makeComponent("cardAttributes.title", <GiSettingsKnobs size={30} style={{ margin: "0 5px" }}/>);
const BattlePoints = makeComponent("cardBattlePoints.title", <IoCalculator size={30} style={{ margin: "0 5px" }}/>);
const Combat = makeComponent("cardCombat.title", <GiSwordClash size={30} style={{ margin: "0 5px" }}/>);
const Conditions = makeComponent("cardConditions.title", <GiDropWeapon size={30} style={{ margin: "0 5px" }}/>);
const Countdown = makeComponent("cardCountdown.title", <TbClockHour8 size={30} style={{ margin: "0 5px" }}/>);
const CountdownRules = makeComponent("cardCountdownRules.title", <TbClockSearch size={30} style={{ margin: "0 5px" }}/>);
const Death = makeComponent("cardDeath.title", <GiTombstone size={30} style={{ margin: "0 5px" }}/>);
const DiceRoller = makeComponent("cardDiceRoller.title", <GiRollingDices size={30} style={{ margin: "0 5px" }}/>);
const Difficulty = makeComponent("cardDifficulty.title", <PiLadder size={30} style={{ margin: "0 5px" }}/>);
const Fear = makeComponent("cardFear.title", <FaCrow size={30} style={{ margin: "0 5px" }}/>);
const FearTracker = makeComponent("cardFearTracker.title", <IoSkullOutline size={30} style={{ margin: "0 5px" }}/>);
const Hope = makeComponent("cardHope.title", <GiPeaceDove size={30} style={{ margin: "0 5px" }}/>);
const Image = makeComponent("cardImage.title", <IoImageOutline size={30} style={{ margin: "0 5px" }}/>);
const Prices = makeComponent("cardPrices.title", <GiTwoCoins size={30} style={{ margin: "0 5px" }}/>);
const Range = makeComponent("cardRange.title", <TbRulerMeasure size={30} style={{ margin: "0 5px" }}/>);
const Rest = makeComponent("cardRest.title", <FaBed size={30} style={{ margin: "0 5px" }}/>);
const Rolls = makeComponent("cardRolls.title", <TbCakeRoll size={30} style={{ margin: "0 5px" }}/>);
const SceneFear = makeComponent("cardSceneFear.title", <GiHidden size={30} style={{ margin: "0 5px" }}/>);
const Spacing = makeComponent("cardSpacing.title", <RxSpaceBetweenVertically size={30} style={{ margin: "0 5px" }}/>);
const Spotlight = makeComponent("cardSpotlight.title", <GiTheaterCurtains size={30} style={{ margin: "0 5px" }}/>);
const Teamwork = makeComponent("cardTeamwork.title", <RiTeamFill size={30} style={{ margin: "0 5px" }}/>);
const Text = makeComponent("cardText.title", <PiCursorText size={30} style={{ margin: "0 5px" }}/>);
const Tutorial1 = makeComponent("cardTutorial1.title", <BsMortarboardFill size={30} style={{ margin: "0 5px" }} />)
const Tutorial2 = makeComponent("cardTutorial2.title", <BsMortarboardFill size={30} style={{ margin: "0 5px" }} />)
const Tutorial3 = makeComponent("cardTutorial3.title", <BsMortarboardFill size={30} style={{ margin: "0 5px" }} />)
const Support = makeComponent("cardSupport.title", <MdOutlineVolunteerActivism size={30} style={{ margin: "0 5px" }} />)
const License = makeComponent("cardLicense.title", <TbLicense size={30} style={{ margin: "0 5px" }} />)

export const cardOptionsObject = [
	{ nameKey: "cardAdversary.title", call: "adversary", content: <Adversary/> },
	{ nameKey: "cardAdversaryStats.title", call: "adversaryStats", content: <AdversaryStats/> },
	{ nameKey: "cardArmrStrss.title", call: "armrStrss", content: <ArmrStrss/> },
	{ nameKey: "cardAttributes.title", call: "attributes", content: <Attributes/> },
	{ nameKey: "cardBattlePoints.title", call: "battlePoints", content: <BattlePoints/> },
	{ nameKey: "cardCombat.title", call: "combat", content: <Combat/> },
	{ nameKey: "cardConditions.title", call: "conditions", content: <Conditions/> },
	{ nameKey: "cardCountdown.title", call: "countdown", content: <Countdown/> },
	{ nameKey: "cardCountdownRules.title", call: "countdownRules", content: <CountdownRules/> },
	{ nameKey: "cardDeath.title", call: "death", content: <Death/> },
	{ nameKey: "cardDiceRoller.title", call: "diceRoller", content: <DiceRoller/> },
	{ nameKey: "cardDifficulty.title", call: "difficulty", content: <Difficulty/> },
	{ nameKey: "cardFear.title", call: "fear", content: <Fear/> },
	{ nameKey: "cardFearTracker.title", call: "fearTracker", content: <FearTracker/> },
	{ nameKey: "cardHope.title", call: "hope", content: <Hope/> },
	{ nameKey: "cardImage.title", call: "image", content: <Image/> },
	{ nameKey: "cardPrices.title", call: "prices", content: <Prices/> },
	{ nameKey: "cardRange.title", call: "range", content: <Range/> },
	{ nameKey: "cardRest.title", call: "rest", content: <Rest/> },
	{ nameKey: "cardRolls.title", call: "rolls", content: <Rolls/> },
	{ nameKey: "cardSceneFear.title", call: "sceneFear", content: <SceneFear/> },
	{ nameKey: "cardSpacing.title", call: "spacing", content: <Spacing/> },
	{ nameKey: "cardSpotlight.title", call: "spotlight", content: <Spotlight/> },
	{ nameKey: "cardTeamwork.title", call: "teamwork", content: <Teamwork/> },
	{ nameKey: "cardText.title", call: "text", content: <Text/> },
	{ nameKey: "cardTutorial1.title", call: "tutorial1", content: <Tutorial1/> },
	{ nameKey: "cardTutorial2.title", call: "tutorial2", content: <Tutorial2/> },
	{ nameKey: "cardTutorial3.title", call: "tutorial3", content: <Tutorial3/> },
	{ nameKey: "cardSupport.title", call: "support", content: <Support/> },
	{ nameKey: "cardLicense.title", call: "license", content: <License/> }
]

export default cardOptionsObject;
