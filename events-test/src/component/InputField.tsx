import React from 'react';

interface InputFieldProps {
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void; // 포커스 아웃 이벤트 핸들러
    error: string | null; // 에러 메시지를 위한 props
}

const InputField: React.FC<InputFieldProps> = ({
    value,
    onChange,
    onBlur,
    error,
}) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)} // value를 직접 전달
                onBlur={onBlur} // 포커스 아웃 핸들러 추가
            />
            {error && <span style={{ color: 'red' }}>{error}</span>} {/* 에러 메시지 */}
        </div>
    );
};

export default React.memo(InputField);
