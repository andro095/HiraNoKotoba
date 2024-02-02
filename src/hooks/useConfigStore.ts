// React Libraries
import { useEffect } from 'react';

// Third Party Libraries
import { locale as changeLocale } from "primereact/api";

// Local Libraries
import { setLocale } from '@store';
import { getUserLocale } from '@helpers';

// Hooks
import { useAppDispatch, useAppSelector } from './useStore'


export const useConfigStore = () => {
    const { locale } = useAppSelector(state => state.config);
    const dispatch = useAppDispatch();
    
    const updateLocale = (locale: string) => {
        dispatch(setLocale(locale));
        changeLocale(locale);
        localStorage.setItem('locale', locale);
    };
    
    useEffect(() => {
        const locale = getUserLocale();

        dispatch(setLocale(locale));
    }, []);
    
    return {
        // Properties
        locale,
        
        // Methods
        updateLocale
        
    };
}