import { useInputValidation } from '../hooks/useInputValidation';
import InputField from '../component/InputField';

const MyComponent = () => {
    const { value, error, handleChange, handleBlur } = useInputValidation({
        validate: (value) => value.length < 5 ? "Too short" : null
    });

    return (
        <InputField
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error}
        />
    );
};

export default MyComponent;
