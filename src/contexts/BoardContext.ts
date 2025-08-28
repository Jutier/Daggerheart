import { createContext, useContext  } from "react";
import { type CardContextType } from "./CardContext";

export type Deck = {
	deckId: string;
	cards: CardContextType[];
};

type BoardContextType = {
	decks: Deck[];
	setDecks: (decks: Deck[]) => void;
	deckAdd: () => void;
	deckRemove: (deckId: string) => void;
	cardAdd: (cardType: string) => void;
	cardRemove: (deckId: string, cardId: string) => void;
	cardMove: (card: CardContextType) => void;
	updateCardExtras: (card: CardContextType, updates: Record<string, any>) => void;
	saveBoardToJson: () => void;
	saveBoardLocal: () => void;
	loadLocalJson: () => void;
};

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

export default function useBoard() {
	const context = useContext(BoardContext);
	if (!context) {
		throw new Error('useBoard has to be used within <BoardProvider>');
	}

	return context;
}
