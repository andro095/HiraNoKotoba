import { message } from "@components";
import { useBreakpoints, useMessagge } from "@hooks";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";


export const ResettedPage = () => {

    const { getMessage } = useMessagge();
    const navigate = useNavigate();
    const { isMobile, isDesktop } = useBreakpoints();

    const size = isDesktop ? 'large' : isMobile ? 'small' : undefined;

    return (
        <div
            className="w-full flex-grow-1 flex flex-column gap-4 align-items-center"
        >
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.resetted.message')}
            </p>
            <Button
                rounded
                label={getMessage('auth.resetted.submit')}
                className="w-8 bg-white text-primary"
                size={size}
                onClick={() => navigate('/auth/login')}
            />
        </div>
    )
}