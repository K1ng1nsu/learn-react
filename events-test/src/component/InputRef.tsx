// import React from 'react'

// type Props = {
//     ref: React.MutableRefObject<HTMLInputElement | null>;
//     onBlur: () => void;
//     error: string | null;
//     type: string;
// }

// const InputRef: React.FC<Props> = ({ ref, onBlur, error, type }) => {

//     const inputProps = {
//         type,
//         ref,
//         onBlur
//     }


//     return (
//         <div>
//             <input {...inputProps} />
//             {error && <span style={{ color: 'red' }}>{error}</span>}
//         </div>
//     )
// }

// export default InputRef

import { forwardRef } from 'react';

type Props = {
    onBlur: () => void;
    error: string | null;
    type: string;
};

// forwardRef를 사용하여 컴포넌트 정의
const InputRef = forwardRef<HTMLInputElement, Props>(({ onBlur, error, type }, ref) => {
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

export default InputRef;
