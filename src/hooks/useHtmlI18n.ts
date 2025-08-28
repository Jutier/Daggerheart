import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function useHtmlI18n() {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.lang = i18n.language.split("-")[0];
		document.title = t("ui.appTitle");
	}, [i18n.language, t]);
}

export default useHtmlI18n;
