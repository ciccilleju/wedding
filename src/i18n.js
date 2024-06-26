// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';
import translationHU from './locales/hu/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  },
  hu: {
    translation: translationHU
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
