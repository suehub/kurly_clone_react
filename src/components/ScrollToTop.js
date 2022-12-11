import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const {scroll} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [scroll]);

    console.log(scroll);

    return null;
}