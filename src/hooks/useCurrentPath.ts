import { useLocation } from "react-router-dom"


export const useCurrentPath = () => {

    const { pathname } = useLocation();

    const pathParts = pathname.split('/').splice(1);
    
    const lastPath = pathParts[pathParts.length - 1];


    return {
        pathname,
        pathParts,
        lastPath
    }
}