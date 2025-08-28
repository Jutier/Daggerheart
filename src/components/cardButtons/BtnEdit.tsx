import CardButton, { type CardButtonProps } from "../atoms/CardButton.tsx";
import { CiEdit } from "react-icons/ci";

type BtnEditProps = Omit<CardButtonProps, "color" | "children">;

function BtnEdit(props: BtnEditProps) {

	return (
			<CardButton color="var(--color-btn-edit)" {...props}>
				<CiEdit/>
			</CardButton>
	);
}

export default BtnEdit;
