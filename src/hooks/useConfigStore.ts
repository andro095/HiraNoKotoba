// React Libraries
import { useEffect } from 'react';

// Third Party Libraries
import { locale as changeLocale } from "primereact/api";

// Local Libraries
import { setIsLoading, setLocale } from '@store';
import { getUserLocale } from '@helpers';

// Hooks
import { useAppDispatch, useAppSelector } from './useStore'
import { instance } from '@services';


export const useConfigStore = () => {
    const { locale, isLoading } = useAppSelector(state => state.config);
    const dispatch = useAppDispatch();
    
    const updateLocale = (locale: string) => {
        dispatch(setLocale(locale));
        changeLocale(locale);
        localStorage.setItem('locale', locale);
    };

    const updateLoading = (loading: boolean) => {
        dispatch(setIsLoading(loading))
    };
    
    useEffect(() => {
        const locale = getUserLocale();

        dispatch(setLocale(locale));

        instance.interceptors.request.use((config) => {
           dispatch(setIsLoading(true)); 
            
            return config;
        });

        instance.interceptors.response.use((response) => {
            dispatch(setIsLoading(false));
            
            return response;
        });
    }, []);
    
    return {
        // Properties
        locale,
        isLoading,
        
        // Methods
        updateLocale,
        updateLoading
    };
}