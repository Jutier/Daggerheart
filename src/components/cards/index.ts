import CardAdversary from "./CardAdversary";
import CardAdversaryStats from "./CardAdversaryStats";
import CardArmrStrss from "./CardArmrStrss";
import CardAttributes from "./CardAttributes";
import CardBattlePoints from "./CardBattlePoints";
import CardCombat from "./CardCombat";
import CardConditions from "./CardConditions";
import CardDeath from "./CardDeath";
import CardDiceRoller from "./CardDiceRoller";
import CardDifficulty from "./CardDifficulty";
import CardFear from "./CardFear";
import CardFearTracker from "./CardFearTracker";
import CardHope from "./CardHope";
import CardImage from "./CardImage";
import CardPrices from "./CardPrices";
import CardRange from "./CardRange";
import CardRest from "./CardRest";
import CardRolls from "./CardRolls";
import CardSceneFear from "./CardSceneFear";
import CardSpacing from "./CardSpacing";
import CardSpotlight from "./CardSpotlight";
import CardTeamwork from "./CardTeamwork";
import CardText from "./CardText";
import CardTutorial1 from "./credits/CardTutorial1";
import CardTutorial2 from "./credits/CardTutorial2";
import CardTutorial3 from "./credits/CardTutorial3";
import CardSupport from "./credits/CardSupport";
import CardLicense from "./credits/CardLicense";


const CardComponents: Record<string, React.FC<any>> = {
	adversary: CardAdversary,
	adversaryStats: CardAdversaryStats,
	armrStrss: CardArmrStrss,
	attributes: CardAttributes,
	battlePoints: CardBattlePoints,
	combat: CardCombat,
	conditions: CardConditions,
	death: CardDeath,
	diceRoller: CardDiceRoller,
	difficulty: CardDifficulty,
	fear: CardFear,
	fearTracker: CardFearTracker,
	hope: CardHope,
	image: CardImage,
	prices: CardPrices,
	range: CardRange,
	rest: CardRest,
	rolls: CardRolls,
	sceneFear: CardSceneFear,
	spacing: CardSpacing,
	spotlight: CardSpotlight,
	teamwork: CardTeamwork,
	text: CardText,
	tutorial1: CardTutorial1,
	tutorial2: CardTutorial2,
	tutorial3: CardTutorial3,
	support: CardSupport,
	license: CardLicense,
};

export default CardComponents;
