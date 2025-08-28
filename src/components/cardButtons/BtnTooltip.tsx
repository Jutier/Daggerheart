import { useState } from "react";
import CardButton, { type CardButtonProps } from "../atoms/CardButton.tsx";
import styled from "styled-components";
import { IoInformationCircleOutline } from "react-icons/io5";

type BtnTooltipProps = Omit<CardButtonProps, "color">;

const StyledTip = styled.div<{ $visible: boolean }>`
	position: absolute;
	top: 0%;
	right: 100%; /* posiciona à esquerda do botão */
	z-index: 100;

	background-color: var(--color-fg);
	color: var(--color-text);

	padding: 6px 10px;
	border-radius: 8px;
	font-size: 0.75rem;
	white-space: nowrap;

	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
	transition: opacity 0.25s ease, transform 0.25s ease;
	transition-delay: ${({ $visible }) => ($visible ? '0.3s' : '0s')};
`;


function BtnTooltip({ children, ...rest }: BtnTooltipProps) {
	const [visible, setVisible] = useState(false);

	return (
			<CardButton
				color="var(--color-btn-info)"
				clickable={false}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				{...rest}
			>
				<IoInformationCircleOutline/>
				<StyledTip $visible={visible} >
					{children}
				</StyledTip>
			</CardButton>
	);
}

export default BtnTooltip;
