import styled from "styled-components";
import { v4 as uuid } from 'uuid';

export type FieldProps = {
	width: string;
	type?: "text" | "number";
	value: string | number | undefined;
	placeholder?: string;
	options?: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input.attrs<{ $width: string }>
	(props => ({
		style: {
			width: props.$width
		}
	}))`
	background-color: var(--color-fg);
	color: var(--color-text);
	outline: solid 2px var(--color-accent-2);
	border: none;
	border-radius: 0.7rem;
	padding: 0.2rem 2px 0.2rem 0.3rem;
	font-size: 1rem;
	margin: 4px;

	&:focus {
		outline-color: var(--color-accent-1);
	}
`;

function Field({ width, type="text", value, placeholder, options, ...props }: FieldProps) {
	const datalistId = options ? ('datalist-' + uuid()) : undefined;

	return (
		<>
			<StyledInput
				$width={width}
				type={type}
				placeholder={placeholder}
				value={value}
				list={datalistId}
				{...props}
			/>
			
			{options && (
				<datalist id={datalistId}>
					{options.map((option, index) => (
						<option key={index} value={option} />
					))}
				</datalist>
			)}
		</>
	);
}

export default Field;
