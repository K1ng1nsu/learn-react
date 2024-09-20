import { useRef, useState } from 'react';
import InputField from './component/InputField';
import Test1 from './component/Test1';
import Test2 from './component/Test2';
import Test3 from './component/Test3';
import { useInputValidation } from './hooks/useInputValidation';
import { validateNumber } from './utils/validation';
import { useInputRef } from './hooks/useInputRef';
import InputRef from './component/InputRef';
import Input from './component/Input';

const App = () => {

  const { value: xValue, error: xError, handleChange: xHandleChange, handleBlur: xHandleBlur } = useInputValidation({
    initialValue: "0",
    validate: validateNumber
  });

  const { value: yValue, error: yError, handleChange: yHandleChange, handleBlur: yHandleBlur } = useInputValidation({
    initialValue: "0",
    validate: validateNumber
  });





  const z = useRef<HTMLInputElement>(null);

  const testHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  }


  const { ref, error, onBlur } = useInputRef({ validate: validateNumber });
  const { ref: ref2, error: error2, onBlur: onBlur2 } = useInputRef({ validate: validateNumber });
  const [result, setResult] = useState<number>(0);

  const resultHandler = () => {
    if (k.current && k2.current) {
      setResult(parseInt(k.current.value) + parseInt(k2.current.value));
    }

  }

  const k = useRef<HTMLInputElement>(null);
  const k2 = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Test1 />
      <hr />
      <Test2 />
      <hr />
      <Test3 />
      <hr />
      x: <InputField error={xError} value={xValue} onChange={xHandleChange} onBlur={xHandleBlur} />
      y: <InputField error={yError} value={yValue} onChange={yHandleChange} onBlur={yHandleBlur} />
      <button onClick={resultHandler}>add</button>
      <br />
      result: {result}
      <br />
      <input type='text' ref={z} onBlur={testHandler} />
      <br />
      <br />
      <hr />
      <InputRef type='text' ref={ref} error={error} onBlur={onBlur} />
      <InputRef type='text' ref={ref2} error={error2} onBlur={onBlur2} />
      <button onClick={resultHandler}>add</button>
      <br />
      result: {result}
      <br />
      <hr />
      <br />
      <Input type='text' validate={validateNumber} ref={k} />
      <Input type='text' validate={validateNumber} ref={k2} />
      <button onClick={resultHandler}>add</button>
      <br />
      result: {result}
    </div>
  )
}

export default App