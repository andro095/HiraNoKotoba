import { English, Spanish } from "./languages";


export const locales : Locales = {
    es: Spanish,
    en: English,
}

type LocalesValue = string | string[] | number | boolean | Locales;

interface Locales {
    [key: string]: LocalesValue;
}