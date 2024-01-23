import { FormattedMessage } from "react-intl"


export const message = (id: string, defaultMessage: string = '', values: Record<string, never> = {}, desc: string = '') => {
    return (
        <FormattedMessage 
            id={id} 
            defaultMessage={defaultMessage} 
            values={values} 
            description={desc}
        />
    )
}