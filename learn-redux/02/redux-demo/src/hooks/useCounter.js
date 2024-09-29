import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, toggleCounter } from '../store/counterSlice';

const useCounter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => dispatch(increment());
    const decrementHandler = () => dispatch(decrement());
    const incrementByAmountHandler = (amount) => dispatch(incrementByAmount(amount));
    const toggleCounterHandler = () => dispatch(toggleCounter());

    return { counter, showCounter, incrementHandler, decrementHandler, incrementByAmountHandler, toggleCounterHandler };
};

export default useCounter;
