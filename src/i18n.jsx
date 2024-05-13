import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            title: 'Multi-Language app',
        },
    },
    es: {
        translation: {
            title: 'Aplicación en varios idiomas',
        },
    },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
  });

export default i18n;
