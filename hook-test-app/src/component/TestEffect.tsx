import {ChangeEvent, useEffect, useState} from 'react';

const TestEffect = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('insu');

    // 네임이 변경될 때만 재 실행
    // useEffect(() => {
    //     console.log(`${name} 님이 ${count}번 클릭했습니다.`);
    // }, [name])

    // 마운트 될 때 최초 1회 실행
    // useEffect(() => {
    //     console.log(`${name} 님이 ${count}번 클릭했습니다.`);
    // }, [])

    // // 매번 재 실행
    // useEffect(() => {
    //     console.log(`${name} 님이 ${count}번 클릭했습니다.`);

    // })

    useEffect(() => {
        console.log(`이름: ${name}`);
    }, [name]);

    useEffect(() => {
        console.log(`count : ${count}`);
    }, [count]);

    function changeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setName(e.target.value);
    }

    function clickHandler(): void {
        setCount((prev) => prev + 1);
    }

    return (
        <div>
            이름 변경:
            <input
                type="text"
                value={name}
                onChange={changeHandler}
            />
            <hr />
            <button onClick={clickHandler}>카운트 1증가</button>
            <p>
                {name} 님이 {count}번 클릭했습니다.
            </p>
        </div>
    );
};

export default TestEffect;
