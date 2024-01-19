// Local Libraries
import { locales } from "@locales";


export const getUserLocale = () : string => {
    let locale = localStorage.getItem('locale');

    if (!locale) {
        const userLocale = navigator.language.split('-')[0];

        locale = userLocale in locales ? userLocale : 'en';

        localStorage.setItem('locale', locale);
    }

    return locale;
};