import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFA from './locales/fa/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            fa: {
                translation: translationFA
            }
        },
        lng: 'fa',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
