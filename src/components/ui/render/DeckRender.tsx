import type { Deck } from "../../../contexts/BoardContext";
import { CardProvider } from "../../../contexts/CardProvider";
import CardComponents from "../../cards";
import styled from "styled-components";
import { AnimatePresence } from "motion/react";

const Deck = styled.div`
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	box-sizing: border-box;
	container-type: inline-size;
	z-index: calc(500 - 10*var(--deck-index));
	scroll-snap-align: start;

	> * {
		flex: 0 0 auto;
	}

	@media (max-width: 700px) {
		height: auto;
		min-height: 10rem;
		flex-shrink: 0;
		scroll-snap-align: none;
		margin-bottom: 2rem;
	}

	@media print {
		height: calc(100vh - 1.5rem);
		margin-bottom: 1.5rem;
	}
`;

function DeckRender({ deck, index }: { deck: Deck; index: number }) {
	return (
		<Deck
			data-deck={deck.deckId}
			style={{ '--deck-index': index } as React.CSSProperties}
		>
			<AnimatePresence>
				{deck.cards.map((card) => {
					const CardComponent = CardComponents[card.cardType];
					const { cardId, cardType, deckId, ...extras } = card;

					return (
						<CardProvider
							key={cardId}
							cardId={cardId}
							cardType={cardType}
							deckId={deckId}
							{...extras}
						>
							<CardComponent/>
						</CardProvider>
					);
				})}
			</AnimatePresence>
		</Deck>
	);
}

export default DeckRender;
