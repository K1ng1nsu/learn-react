import { useRef } from 'react';
import { useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const targetTimeInMillis = targetTime * 1000;
    const [timeRemaining, setTimeRemaining] = useState(targetTimeInMillis);

    const timer = useRef();
    const modalRef = useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTimeInMillis;

    if (timeRemaining == 0) {
        modalRef.current.open();
        clearInterval(timer.current);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prev) => prev - 10);
        }, 10);
    }
    function handleStop() {
        modalRef.current.open();
        clearInterval(timer.current);
    }
    function handleReset() {
        setTimeRemaining(targetTimeInMillis);
    }

    return (
        <>
            <ResultModal ref={modalRef} targetTime={targetTime} onReset={handleReset} remainingTime={timeRemaining} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running... ' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
