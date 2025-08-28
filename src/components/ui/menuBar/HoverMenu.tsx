import { motion } from "motion/react";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

const StyledDiv = styled(motion.div)<{ $width?: string }>`
	display: flex;
	flex-direction: column;
	width: ${({ $width }) => $width};
	max-height: 80vh;
	background-color: #15151550;
	backdrop-filter: blur(5px);
	padding: 15px;
	border-radius: 20px;
	position: fixed;
	top: 45%;
	left: calc(50% + 2rem);
	transform: translate(-50%, -50%);

	@media (max-width: 700px) {
		left: 50%;
	}
`;

const SearchBarContainer = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 12px;
`;

const SearchInput = styled.input`
	flex: 1;
	background-color: var(--color-bg);
	color: var(--color-text);
	outline: solid 2px var(--color-accent-2);
	border: none;
	border-radius: 15px;
	padding: 0.2rem 0.4rem;
	font-size: 1rem;
	height: 30px;
	min-width: 30px;
	transition: all 0.2s ease-out;

	&:focus {
		outline-color: var(--color-accent-1);
		background-color: var(--color-fg);
	}
`;

const StyledClose = styled.button`
	display: flex;
	flex-direction: column;
	background-color: var(--color-bg);
	border-radius: 20px;
	width: 36px;
	height: 36px;
	border: none;
	color: var(--color-accent-2);
	cursor: pointer;
	transition: color 0.3s ease;
	justify-content: center;
	align-items: center;
	margin: 0 0 0 10px;
	transition: all 0.2s ease-out;

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 2.5px solid var(--color-btn-close);
		outline-offset: 1px;
	}

	&:hover {
		color: var(--color-btn-close);
		background-color: var(--color-fg);
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}
`;

const OptionsDiv = styled.div`
	display: flex;
	padding: 5px 0;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 10px;
	overflow-y: auto;
`;

const OptionButton = styled.button<{ $opWidth: string, $opHeight: string }>`
	display: flex;
	flex-wrap: wrap;
	background-color: var(--color-fg);
	color: var(--color-text);
	font: inherit;
	font-size: 1rem;
	font-weight: bold;
	width: ${({ $opWidth }) => $opWidth};
	height: ${({ $opHeight }) => $opHeight};
	cursor: pointer;
	transition: all 0.2s ease-out;
	border: none;
	border-radius: 15px;
	justify-content: center;
	align-content: center;
	align-items: center;

	&:hover {
		color: var(--color-accent-1);
		background-color: var(--color-bg);
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}

	&:focus-visible {
		border-radius: 8px;
		outline: 4px solid var(--color-accent-1);
	}
`;

export type MenuItem = {
	nameKey: string,
	call: string,
	content: React.ReactNode
};

type HoverMenuProps = {
	items: MenuItem[],
	funcSelec: (call: string) => void,
	searchable?: boolean,
	children?: React.ReactNode,
	width: string,
	opWidth: string,
	opHeight: string,
	setOpen: (open: boolean) => void
} & React.HTMLAttributes<HTMLDivElement>;

function HoverMenu({ items, funcSelec, width, opWidth, opHeight, setOpen }: HoverMenuProps) {
	const { t } = useTranslation();

	const [search, setSearch] = useState("");

	const filteredItems = items.filter(item =>
		t(item.nameKey).toLowerCase().includes(search.toLowerCase())
	);

	return (
		<StyledDiv
			$width={width}
			initial={{ opacity: 0, scale: 0.4}}
			animate={{ opacity: 1, scale: 1}}
			exit={{ opacity: 0, scale: 0.4}}
			transition={{ duration: 0.3 }}
			transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
			onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
		>
			<SearchBarContainer
				onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
			>
			<SearchInput
				type="text"
				placeholder={t("ui.search")}
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<StyledClose
				onClick={() => setOpen(false)}
			>
				<IoClose size={30}/>
			</StyledClose>
			</SearchBarContainer>
			<OptionsDiv>
				{filteredItems.length > 0 ? (
					filteredItems.map(item => (
						<OptionButton
							$opWidth={opWidth}
							$opHeight={opHeight}
							key={item.call}
							onClick={() => funcSelec(item.call)}
						>
							{item.content}
						</OptionButton>
					))
				) : (
					<em>{t("ui.notFound")}</em>
				)}
			</OptionsDiv>
		</StyledDiv>
	);
}

export default HoverMenu;
