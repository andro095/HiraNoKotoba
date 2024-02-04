import { message } from "@components"
import { useBreakpoints, useMessagge } from "@hooks";
import { Button } from "primereact/button"
import { useLocation } from "react-router-dom";



export const ConfirmationPage = () => {
    const { getMessage } = useMessagge();
    const { isMobile, isDesktop } = useBreakpoints();
    const { state } = useLocation();

    const { email } = state;

    const size = isDesktop ? 'large' : isMobile ? 'small' : undefined;

    return (
        <div
            className="w-full flex-grow-1 flex flex-column gap-3 align-items-center"
        >
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.confirmation.message_1')}
            </p>
            <p
                className="w-8 m-0 flex justify-content-center"
            >
                <strong>
                    {email}
                </strong>
            </p>
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.confirmation.message_2')}
            </p>
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.confirmation.message_3')}
            </p>
            <Button
                rounded
                label={getMessage('auth.confirmation.submit')}
                className="w-8 bg-white text-primary"
                size={size}
                onClick={() => {}}
            />
        </div>
    )
}