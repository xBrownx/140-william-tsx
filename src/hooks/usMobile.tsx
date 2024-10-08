import * as React from "react";

export const useMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const checkScreenSize = () => {
        setIsMobile((window.innerWidth < 900))
    };

    React.useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isMobile;
}