import DeltaButton, { type DeltaButtonProps } from "../atoms/DeltaButton";
import { TiPlus } from "react-icons/ti";

type PlusButtonProps = Omit<DeltaButtonProps, "icon" | "color" | "delta">;

function PlusButton({ state, setState, ...rest }: PlusButtonProps) {

	return (
			<DeltaButton
				icon=<TiPlus/>
				color="var(--color-plus)"
				delta={1}
				state={state}
				setState={setState}
				{...rest}
			/>
	);
}

export default PlusButton;
