// Local Libraries
import { setLocale } from '@store';
import { useAppDispatch, useAppSelector } from './useStore'
import { useEffect } from 'react';
import { locales } from '@locales';


export const useConfigStore = () => {
    const { locale } = useAppSelector(state => state.config);
    const dispatch = useAppDispatch();
    
    const updateLocale = (locale: string, updateLocalStorage: boolean = true) => {
        dispatch(setLocale(locale));
        updateLocalStorage && localStorage.setItem('locale', locale);
    };
    
    useEffect(() => {
        const locale = localStorage.getItem('locale');

        if (locale) {
            updateLocale(locale, false);
        } else {
            const userLocale = navigator.language.split('-')[0];

            const finalLocale = userLocale in locales ? userLocale : 'en';

            updateLocale(finalLocale);
        }
    }, []);
    
    return {
        // Properties
        locale,
        
        // Methods
        updateLocale
        
    };
}