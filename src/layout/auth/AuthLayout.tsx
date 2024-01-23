import { LoginLogo } from "@assets"
import { message } from "@components"
import { useCurrentPath } from "@hooks";
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {

    const { lastPath } = useCurrentPath();    

    return (
        <div className="w-full h-full auth-layout">
            <div className="w-full h-full bg-white-alpha-50 flex flex-row-reverse">
                <div className="auth-layout-form-wrapper">
                    <img src={LoginLogo} alt="LoginLogo" />
                    <h1
                        className="text-4xl title-font mt-0 mb-6"
                    >
                        {message(`auth.${lastPath}.title`)}
                    </h1>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}