import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from './translations/en.json';
import pl from './translations/pl.json';
import de from './translations/de.json';
import fr from './translations/fr.json';
import it from './translations/it.json';
import ua from './translations/ua.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            pl: {
                translation: pl
            },
            de: {
                translation: de
            },
            fr: {
                translation: fr
            },
            it: {
                translation: it
            },
            ua: {
                translation: ua
            }
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
