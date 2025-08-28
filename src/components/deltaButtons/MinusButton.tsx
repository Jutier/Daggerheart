import DeltaButton, { type DeltaButtonProps } from "../atoms/DeltaButton";
import { TiMinus } from "react-icons/ti";

type MinusButtonProps = Omit<DeltaButtonProps, "icon" | "color" | "delta">;

function MinusButton({ state, setState, ...rest }: MinusButtonProps) {

	return (
			<DeltaButton
				icon=<TiMinus/>
				color="var(--color-minus)"
				delta={-1}
				state={state}
				setState={setState}
				{...rest}
			/>
	);
}

export default MinusButton;
