import { useRef, useState } from "react";

const Test3 = () => {

    console.log("test3 restart");


    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);


    const elemX = useRef<HTMLInputElement>(null);
    const elemY = useRef<HTMLInputElement>(null);

    const add = () => {
        let x1: number = parseInt(elemX.current ? elemX.current.value : "", 10);
        let y1: number = parseInt(elemY.current ? elemY.current.value : "", 10);
        if (isNaN(x1)) x1 = 0;
        if (isNaN(y1)) y1 = 0;
        setX(x1)
        setY(y1)
    }


    return (
        <>
            <div>Test3</div>
            <div>
                <h3>control component</h3>
                X : <input id="x" type="text" defaultValue={""} ref={elemX} />
                <br />
                Y : <input id="y" type="text" defaultValue={""} ref={elemY} />
                <br />
                <button onClick={add}>plus</button>
                <br />
                result : <span>{x + y}</span>
            </div>
        </>
    )
}

export default Test3