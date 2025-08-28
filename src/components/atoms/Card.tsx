import styled from "styled-components";
import { motion, type HTMLMotionProps } from "motion/react";

type CardProps = {
	cardTitle?: React.ReactNode;
	expand?: boolean;
	resize?: string;
	index?: string
	children: React.ReactNode;
} & HTMLMotionProps<"div">;

const StyledCard = styled(motion.div)<{ $resize?: string }>`
	transition: 
		background-color,
		color,
		border-color;
	transition-duration: 0.4s;

	position: relative;
	display: block;
	width: 28rem;
	border: 3px solid var(--color-accent-2);
	border-radius: 15px;
	background-color: var(--color-bg);
	box-sizing: border-box;
	margin: 5px auto;

	${props => props.$resize && `
		resize: ${props.$resize};
		overflow: hidden;
		min-width: 9rem;
		width: fit-content;
		max-width: calc(100vw - 5rem);
		min-height: 2.2344rem;
	`}
`;

const StyledTitle = styled.h2`
	color: var(--color-accent-1);
	font-family: var(--font-title);
	padding: 0.3rem 0 0.3rem 0.6rem;
	margin: 0;
	border-bottom: 3px solid var(--color-accent-2);
`;

function Card({ cardTitle, expand, resize, children, ...props }: CardProps) {

	return (
		<StyledCard
			$resize={resize}
			layout
			initial={{ opacity: 0, scale: 0.4}}
			animate={{ opacity: 1, scale: 1}}
			exit={{ opacity: 0, scale: 0.4}}
			transition={{ duration: 0.3}}
			{...props}
		>
			{cardTitle && <StyledTitle>{cardTitle}</StyledTitle>}
			<div style={{ padding: expand ? "0" : "0.6rem" }}>{children}</div>
		</StyledCard>
	);
}

export default Card;
