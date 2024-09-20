import { forwardRef } from 'react';
import { useInput } from '../hooks/useInput';

type Props = {
    // onBlur: () => void;
    // error: string | null;
    type: string;
    validate: (value: string) => string | null;
};

// forwardRef를 사용하여 컴포넌트 정의
const Input = forwardRef<HTMLInputElement, Props>(({ type, validate }, ref) => {

    const { error, onBlur } = useInput({ validate });



    const inputProps = {
        type,
        ref, // ref를 직접 사용
        onBlur
    };

    return (
        <div>
            <input {...inputProps} />
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
});

export default Input;
