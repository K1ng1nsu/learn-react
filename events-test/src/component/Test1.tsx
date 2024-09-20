import { useState } from 'react'


const Test1 = () => {
    console.log("test1 restart");

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount((prev) => prev + 1);
        // setCount((prev) => prev + 1); 이거 여러번 쓰면 예상대로 증가함
        // 동기적으로 만들었다면 렌더링을 여러번 해야해서 성능에 좋지 않았을 거임

        // setCount(count + 1) 하면 예상대로 제어되지 않음

    }
    const decrement = () => {
        setCount((prev) => prev - 1);
    }

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value: number = parseInt(e.target.value)
        setCount(value);
    }


    return (
        <>
            <div>test1</div>
            <hr />
            <div>
                <h3>이벤트</h3>
                <div>
                    <button onClick={increment}>increase</button>
                    <button onClick={decrement}>decrease</button>
                </div>
                <div>
                    {/* 아래와 같이 상태가 바인딩되면 안됨 연결이 안되기 때문에 콘솔에 오류 뜸
                        리액트는 양방향 바인딩을 지원하지 않음  */}
                    {/* count : <input type='text' value={count} /> */}
                    {/* 아래와 같이 했을 때 값을 변경할 때 마다 컴포넌트가 재 실행되므로 썩 좋지않다. */}
                    count : <input type='text' value={count} onChange={changeHandler} />
                </div>
            </div>
        </>
    )
}

export default Test1