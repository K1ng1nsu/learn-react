import { ChangeEvent, useState } from 'react'


const TestState = () => {


    const [msg, setMsg] = useState<string>("");


    function changeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setMsg(e.target.value);
    }

    return (
        <div>
            <input type='text' value={msg}
                onChange={changeHandler} />
            <br />
            <span>입력 메시지 : {msg}</span>
        </div>
    )
}

export default TestState