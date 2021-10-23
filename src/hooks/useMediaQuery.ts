import {useEffect, useRef, useState} from "react";

type OnMatchCallback = (event: MediaQueryListEvent) => void

const useMediaQuery = (query: string, onMatch?: OnMatchCallback) => {
    const callbackRef = useRef(onMatch);
    callbackRef.current = onMatch;
    const [matches, setMatches] = useState(() => {
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        const mql = window.matchMedia(query);
        const listener = (e: MediaQueryListEvent) => {
            setMatches(mql.matches);
            e.matches && typeof callbackRef.current === "function" && callbackRef.current(e);
        }
        mql.addEventListener('change', listener)
        return () => mql.removeEventListener('change', listener)
    }, [query]);

    return matches;
}

export default useMediaQuery;