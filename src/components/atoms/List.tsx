import { Children } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
	list-style: none;
	padding-left: 0;
	margin: 0rem;
`;

const StyledItem = styled.li`
	padding: 0.5rem;
	margin: 0.5rem 0;
	border-left: 4px solid var(--color-accent-1);
	background: var(--color-fg);
	border-radius: 10px;
`;

type ListProps = {
	children: React.ReactNode[];
};

function List({ children }: ListProps) {

	return (
			<StyledList>
				{Children.map(children, (child, i) => (
					<StyledItem key={i}>{child}</StyledItem>
				))}
			</StyledList>
	);
}

export default List;
