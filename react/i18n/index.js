import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import en from './en';
import fr from './fr';
import nl from './nl';

i18n
.use(initReactI18next)
.init({
    fallbackLng: 'en',

    resources: {
        en: {
            translations: en
        },
        fr: {
            translations: fr
        },
        nl: {
            translations: nl
        },
    },

    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },

    react: {
        wait: true,
        useSuspense: false
    }
});

/* i18n.on('languageChanged', async (lng) => {
    await AsyncStorage.setItem('language', lng);
}); */

export default i18n;
