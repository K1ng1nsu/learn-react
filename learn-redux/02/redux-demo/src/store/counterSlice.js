import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1;
        },

        decrement: (state) => {
            state.counter = state.counter - 1;
        },

        incrementByAmount: (state, action) => {
            state.counter += action.payload;
        },

        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        },
    },
});

export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;
