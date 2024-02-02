import { breakpoints } from "@constants";
import { useEffect, useState } from "react"



export const useBreakpoints = () => {
    
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width <= breakpoints.sm;
    const isTablet = width > breakpoints.sm && width <= breakpoints.lg;
    const isDesktop = width > breakpoints.lg;

    return {
        isMobile,
        isTablet,
        isDesktop
    }
}