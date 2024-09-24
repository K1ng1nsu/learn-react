import React, {useState} from 'react';
import Clock2 from './Clock2';

const App2 = () => {
    const [formatString, setFormatString] = useState<string>('HH:mm:ss');
    const [clockVisible, setClockVisible] = useState<boolean>(false);

    return (
        <div>
            <h2>간단한 시계</h2>
            <button onClick={() => setClockVisible(!clockVisible)}>
                시계 토글하기
            </button>
            <hr></hr>
            {clockVisible ? <Clock2 formatString={formatString} /> : ''}
        </div>
    );
};

export default App2;
