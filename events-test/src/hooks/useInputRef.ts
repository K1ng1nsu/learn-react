import { useRef, useState } from "react";


interface UseInputRefProps {
    validate: (value: string) => string | null;
}
interface UseInputRefReturn {
    ref: React.MutableRefObject<HTMLInputElement | null>;
    error: string | null;
    onBlur: () => void;
}

export const useInputRef = ({ validate }: UseInputRefProps): UseInputRefReturn => {

    const ref = useRef<HTMLInputElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onBlur = () => {
        if (ref.current) {
            const errorMsg = validate(ref.current.value);
            setError(errorMsg);
        }
    }


    return { ref, error, onBlur }



}