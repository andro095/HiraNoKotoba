import { message } from "@components"
import { useBreakpoints, useMessagge } from "@hooks";
import { Button } from "primereact/button";

export const ResetPasswordSentPage = () => {

    const { getMessage } = useMessagge();
    const { isMobile, isDesktop } = useBreakpoints();

    const size = isDesktop ? 'large' : isMobile ? 'small' : undefined;

    return (
        <div
            className="w-full flex-grow-1 flex flex-column gap-4 align-items-center"
        >
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.reset-sent.message_1')}
            </p>
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.reset-sent.message_2')}
            </p>
            <Button
                rounded
                label={getMessage('auth.reset-sent.submit')}
                className="w-8 bg-white text-primary"
                size={size}
                onClick={() => {}}
            />
        </div>
    )
}