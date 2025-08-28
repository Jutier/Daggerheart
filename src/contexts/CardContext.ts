import { createContext, useContext  } from "react";
import CardComponents from "../components/cards";

type cardType = keyof typeof CardComponents;

export type CardContextType<Extras = {}> = {
	cardId: string;
	cardType: cardType;
	deckId: string;
} & Extras

export const CardContext = createContext<CardContextType | undefined>(undefined);

export default function useCard<Extras = {}>() {
	const context = useContext(CardContext) as CardContextType<Extras> | undefined;
	if (!context) {
		throw new Error('useCard has to be used within <CardProvider>');
	}

	return context;
}
