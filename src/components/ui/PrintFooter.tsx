import styled from "styled-components";

const StyledFooter = styled.footer`
	display: none;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100vw;
	height: 1.5rem;
	padding: 0 2rem;
	box-sizing: border-box;
	justify-content: space-between;
	background-color: var(--color-bg);
	color: var(--color-accent-1);
	z-index: 1000;

	@media print {
		display: flex;
	}
`;

const Label = styled.div`
	display: flex;
	font-weight: bold;
	justify-content: center;
`;

function PrintFooter() {

	return (
		<StyledFooter>
			<Label>github.com/Jutier/Daggerheart/</Label>
			<Label>Daggerheart GM Screen</Label>
			<Label>by Jutier</Label>
		</StyledFooter>
	);
}

export default PrintFooter;
