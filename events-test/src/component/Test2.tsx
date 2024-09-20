import { useState } from "react"

const Test2 = () => {


    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let newValue: number = parseInt(e.target.value);
        if (isNaN(newValue)) {
            newValue = 0;
        }

        if (e.target.id === "x") {
            setX(newValue)
        } else {
            setY(newValue)
        }

    }


    return (
        <>
            <div>Test2</div>
            <div>
                <h3>control component</h3>
                X : <input id="x" type="text" value={x} onChange={changeHandler} />
                <br />
                Y : <input id="y" type="text" value={y} onChange={changeHandler} />
                <br />
                result : <span>{x + y}</span>
            </div>
        </>
    )
}

export default Test2