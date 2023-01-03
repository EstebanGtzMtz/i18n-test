import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./translations/en";
import { es } from './translations/es'

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;