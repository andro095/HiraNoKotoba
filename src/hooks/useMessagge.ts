import { useIntl } from "react-intl";



export const useMessagge = () => {
    const intl = useIntl();

    const getMessage = ( id: string, defaultMessage?: string, description?: string ) => intl.formatMessage({ id, defaultMessage, description });

    return {
        getMessage
    }
}