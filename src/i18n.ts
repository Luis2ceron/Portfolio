import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',
        hi: 'Hello World'
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        hi: 'Hola Mundo'
      },
    },
  },
});

export default i18n;
