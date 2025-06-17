// src/components/ScrollToTop/ScrollToTop.js
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    // useLayoutEffect para que el scroll se ejecute antes de pintar
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
