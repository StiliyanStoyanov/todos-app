import {useMemo, useState} from "react";

type ArrayCouple = [any, any]
type Methods = { toggle: () => void, setIndex0: () => void, setIndex1: () => void }

const useToggle = <T extends ArrayCouple>(toggleValues: T): [T[0] | T[1], Methods]  => {
    const [index, setIndex] = useState<0 | 1>(0);
    const methods: Methods = useMemo(() => {
        const toggle = () => setIndex(currentIndex => currentIndex ? 0 : 1)
        const setIndex0 = () => setIndex(0);
        const setIndex1 = () => setIndex(1);
        return {toggle, setIndex0, setIndex1}
    }, [setIndex]);

    return [toggleValues[index], methods];
}
export default useToggle