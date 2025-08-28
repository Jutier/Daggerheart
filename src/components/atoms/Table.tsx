import { Children, isValidElement } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
	margin: 0 auto;
	border-collapse: collapse;
	table-layout: fixed;
	list-style: none;
`;

const CellStyle: React.CSSProperties = {
	border: "2px solid var(--color-accent-1)",
	padding: "0.5rem",
	textAlign: "center",
};

type ParentProps = {
	children: React.ReactNode;
};

function Head({ children }: ParentProps) {

	return (
		<tr>
			{Children.map(children, (child, i) => (
				<th style={CellStyle} key={i}>{child}</th>
			))}
		</tr>
	);
}

function Body({ children }: ParentProps){

	return (
		<tr>
			{Children.map(children, (child, i) => (
				<td style={CellStyle} key={i}>{child}</td>
			))}
		</tr>
	);
}


function Table({ children }: ParentProps){
	const headRows: React.ReactElement[] = [];
	const bodyRows: React.ReactElement[] = [];

	Children.forEach(children, (child) => {
		if (!isValidElement(child)) return;

		if (child.type === Head) {
			headRows.push(child);
		} else if (child.type === Body) {
			bodyRows.push(child);
		}
	});

	return (
		<StyledTable>
			<thead>{headRows}</thead>
			<tbody>{bodyRows}</tbody>
		</StyledTable>
	);
}

export { Table, Head, Body };
