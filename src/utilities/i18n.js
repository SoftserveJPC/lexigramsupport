// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation JSONs
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import de from '../locales/de.json';
import ja from '../locales/ja.json';
import ru from '../locales/ru.json';
import zh from '../locales/zh.json';
import pt from '../locales/pt.json';
import it from '../locales/it.json';
import hi from '../locales/hi.json';

i18n
  .use(LanguageDetector) // automatically detects browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      ja: { translation: ja },
      ru: { translation: ru },
      zh: { translation: zh },
      pt: { translation: pt },
      it: { translation: it },
      hi: { translation: hi },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
