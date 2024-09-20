import { useState } from "react";


interface UseInputRefProps {
    validate: (value: string) => string | null;
}
interface UseInputRefReturn {
    error: string | null;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void; // 변경된 부분
}

export const useInput = ({ validate }: UseInputRefProps): UseInputRefReturn => {

    const [error, setError] = useState<string | null>(null);

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value; // 이벤트에서 직접 값 가져오기
        const errorMsg = validate(value);
        setError(errorMsg);
    };


    return { error, onBlur }



}