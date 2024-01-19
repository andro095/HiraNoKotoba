// React Libraries
import { IntlProvider } from "react-intl";

// Third Party Libraries
import { flatten } from "flat";

// Local Libraries
import { useConfigStore } from "@hooks";
import { locales } from "@locales";

// Local Components
import App from "./App"
import { APIOptions, PrimeReactProvider } from "primereact/api";
import { useMemo } from "react";

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
                <App />
            </PrimeReactProvider>
        </IntlProvider>
    )
}
