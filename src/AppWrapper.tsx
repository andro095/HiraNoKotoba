// React Libraries
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

// Third Party Libraries
import { flatten } from "flat";
import { APIOptions, PrimeReactProvider } from "primereact/api";

// Local Libraries
import { useConfigStore } from "@hooks";
import { locales } from "@locales";
import { LoaderProvider, ToastProvider } from "@providers";

// Local Components
import { App } from "./App";

// Styles
import  'primeflex/primeflex.css';
import 'primeicons/primeicons.css';        
import '@styles/index.scss';
import './index.scss';


export const AppWrapper = () => {
    const { locale } = useConfigStore();

    const primeContextOptions : Partial<APIOptions> = useMemo(() => ({
        locale
    }), [locale])

    return (
        <IntlProvider
            defaultLocale="en"
            locale={locale}
            messages={flatten(locales[locale])}
        >
            <PrimeReactProvider
                value={primeContextOptions}
            >
                <LoaderProvider>
                    <ToastProvider>
                        <App />
                    </ToastProvider>
                </LoaderProvider>
            </PrimeReactProvider>
        </IntlProvider>
    )
}
