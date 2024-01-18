// React Libraries
import { IntlProvider } from "react-intl";

// Third Party Libraries
import { flatten } from "flat";

// Local Libraries
import { useConfigStore } from "@hooks";
import { locales } from "@locales";

// Local Components
import App from "./App"


export const AppWrapper = () => {
    const { locale } = useConfigStore();

    return (
        <IntlProvider
            defaultLocale="en"
            locale={locale}
            messages={flatten(locales[locale])}
        >
            <App />
        </IntlProvider>
    )
}
