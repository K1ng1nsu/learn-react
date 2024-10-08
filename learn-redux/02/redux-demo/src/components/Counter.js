import useCounter from '../hooks/useCounter';
import classes from './Counter.module.css';

const Counter = () => {
    const { counter, showCounter, incrementHandler, decrementHandler, incrementByAmountHandler, toggleCounterHandler } =
        useCounter();

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && (
                <>
                    <div className={classes.value}>{counter}</div>
                    <div>
                        <button onClick={incrementHandler}>increment</button>
                        <button onClick={() => incrementByAmountHandler(5)}>increment by 5</button>
                        <button onClick={decrementHandler}>decrement</button>
                    </div>
                </>
            )}

            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
