// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fa from './locales/fa.json';
import en from './locales/en.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fa: { translation: fa },
      en: { translation: en },
      de: { translation: de }
    },
    lng: "fa",
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
