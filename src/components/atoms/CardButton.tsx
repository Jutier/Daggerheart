import styled from "styled-components";

export type CardButtonProps = {
	color: string;
	right: string;
	clickable?: boolean;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const StyledButton = styled.button<{
	$color: string;
	$right: string;
	$clickable: boolean;
}>`
	padding: 0;
	position: absolute;
	top: 0.2rem;
	right: ${({ $right }) => $right};
	background: none;
	border: none;
	color: var(--color-accent-1);
	font-size: 1.4rem;
	display: inline-flex;
	cursor: pointer;
	transition: all 0.2s ease-out;

	&:focus {
		outline: none;
	}

	&:focus-visible {
		border-radius: 8px;
		outline: 2.5px solid ${({ $color }) => $color};
		outline-offset: 1px;
	}

	&:hover {
		color: ${({ $color }) => $color};
	}
	${props => props.$clickable && `
		&:active {
			transform: scale(0.85);
		}
	`}
`;

function CardButton({ color, right, children, clickable=true, ...rest }: CardButtonProps) {

	return (
		<StyledButton className="no-print" $color={color} $right={right} $clickable={clickable} {...rest}>
			{children}
		</StyledButton>
	);
}

export default CardButton;
