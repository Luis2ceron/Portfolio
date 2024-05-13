// i18n.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                hello: 'Hello World!',
            },
        },
        es: {
            translation: {
                hello: '¡Hola Mundo!',
            },
        },
    },
});

export default i18n;
