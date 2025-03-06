import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import de from "./locales/de/common.json";

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  de: {
    translation: {
      ...de,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
