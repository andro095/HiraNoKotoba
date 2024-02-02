import { GoogleIcon } from "@assets"
import { Button } from "primereact/button"



export const GoogleButton = () => {

    const icon = (
        <img 
            src={GoogleIcon} 
            alt="Google Icon"
            className="w-1rem h-1rem"
        />
    )

    return (
        <Button
            icon={icon}
            className="bg-white"
        />
    )
}