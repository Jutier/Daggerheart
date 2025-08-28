import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

const savedLang = localStorage.getItem("lang");

i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: savedLang || undefined,
		fallbackLng: "en-US",
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json',
		},
		react: {
			transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'em', 'wbr', 's']
		}
	});

export default i18n;
