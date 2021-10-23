import {useMemo, useState} from "react";
type AnyCouple = [any, any]
type BooleanCouple = [boolean, boolean]
type Methods = { toggle: () => void, open: () => void, close: () => void }
type DefaultProps = [boolean, Methods];
type ExtractProps<T extends AnyCouple> = [T[0] | T[1], Methods]
type Return<T extends AnyCouple> = T extends BooleanCouple ? DefaultProps : ExtractProps<T>
const defaultValues: BooleanCouple = [true, false]
const useToggle = <T extends AnyCouple>(toggleValues: T | BooleanCouple = defaultValues): Return<T>  => {
    const [index, setIndex] = useState<0 | 1>(0);
    const methods = useMemo(() => {
        const toggle = () => setIndex(currentIndex => currentIndex ? 0 : 1)
        const open = () => setIndex(0);
        const close = () => setIndex(1);
        return {toggle, open, close}
    }, [setIndex]);

    return [toggleValues[index], methods];
}

export default useToggle