import { useTranslation } from "react-i18next";
import { LuHardDriveDownload } from "react-icons/lu";
import { LuHardDriveUpload } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import useBoard from "../../../../contexts/BoardContext";

function UploadOption() {
	const { t } = useTranslation();
	const { loadLocalJson } = useBoard();

	async function inputLoad(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) return;
		const text = await file.text();
		localStorage.setItem("userBoard", text);
		loadLocalJson();
	}

	return (
		<>
			<label
				htmlFor="file-input"
				style={{
					display: "flex",
					justifyContent: "end",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<LuHardDriveUpload size={30} style={{ margin: "0 5px" }} />
				{t("ui.upload")}
			</label>
			<input
				id="file-input"
				type="file"
				accept="application/json"
				onChange={inputLoad}
				style={{ display: "none" }}
			/>
		</>
	);
}

function DownloadOption() {
	const { t } = useTranslation();
	const { saveBoardToJson } = useBoard();

	return (
		<label
			onClick={saveBoardToJson}
			style={{
				display: "flex",
				justifyContent: "end",
				alignContent: "center",
				alignItems: "center"
			}}
		>
		<LuHardDriveDownload size={30} style={{ margin: "0 5px" }}/>
		{t("ui.download")}
		</label>
	);
}

function LocalStorageOption() {
	const { t } = useTranslation();
	const { saveBoardLocal } = useBoard();

	return (
		<label
			onClick={saveBoardLocal}
			style={{
				display: "flex",
				justifyContent: "end",
				alignContent: "center",
				alignItems: "center"
			}}
		>
		<LuDatabase size={30} style={{ margin: "0 5px" }}/>
		{t("ui.saveLocal")}
		</label>
	)
}



const cardOptionsObject = [
	{ nameKey: "ui.saveLocal", call: "localStorage", content: <LocalStorageOption/> },
	{ nameKey: "ui.download", call: "download", content: <DownloadOption/> },
	{ nameKey: "ui.upload", call: "upload", content: <UploadOption/> },
];

export default cardOptionsObject;
