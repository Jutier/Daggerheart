import { CardContext, type CardContextType } from "./CardContext";

type CardProviderProps<Extras = {}> = CardContextType<Extras> & {
	children: React.ReactNode;
};

export function CardProvider<Extras = {}>({
	cardId,
	cardType,
	deckId,
	children,
	...extras
}: CardProviderProps<Extras>) {
	const value = { cardId, cardType, deckId, ...extras };

	return (
		<CardContext.Provider value={value}>
			{children}
		</CardContext.Provider>
	);
}
