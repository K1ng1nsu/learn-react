import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },

    decrement: (state) => {
      state.counter--;
    },

    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },

    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
