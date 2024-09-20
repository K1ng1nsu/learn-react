// useInputValidation.ts
import { useState } from 'react';

type Validator = (value: string) => string | null;

interface UseInputValidationProps {
    initialValue?: string;
    validate: Validator;
}

interface UseInputValidationReturn {
    value: string;
    error: string | null;
    handleChange: (newValue: string) => void;
    handleBlur: () => void;
}

export const useInputValidation = ({ initialValue = '', validate }: UseInputValidationProps): UseInputValidationReturn => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        setError(null); // 초기화
    };

    const handleBlur = () => {
        const errorMsg = validate(value);
        setError(errorMsg);
    };

    return { value, error, handleChange, handleBlur };
};
