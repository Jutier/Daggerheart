import DeckRender from "./DeckRender";
import styled from "styled-components";
import useBoard from "../../../contexts/BoardContext";
import NewDeck from "../NewDeck";

const Board = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
	gap: 0;
	margin-left: 4rem;
	height: 100vh;
	overflow-y: auto;
	scroll-snap-type: y proximity;

	@media (max-width: 700px) {
		display: flex;
		flex-direction: column;
		width: 100vw;
		margin: 0;
	}

	@media print {
		margin: 0 0 500px 0;
		overflow: visible;
	}
}
`;

function BoardRender() {
	const { decks } = useBoard();

	return (
		<Board>
			{decks.map((deck, index) => (
				<DeckRender
					key={deck.deckId}
					deck={deck}
					index={index}
				/>
			))}
			<NewDeck/>
		</Board>
	);
}

export default BoardRender;
