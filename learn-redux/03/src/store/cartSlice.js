import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      state.items.push({ ...action.payload });
      state.totalQuantity++;
    },
    deleteItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      state.items.splice(itemIndex, 1);
      state.totalQuantity--;
    },
    increment(state, action) {
      const item = state.items.find(
        (item) => item.title === action.payload.title
      );
      item.quantity++;
      state.totalQuantity++;
    },
    decrement(state, action) {
      const item = state.items.find(
        (item) => item.title === action.payload.title
      );
      item.quantity--;
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
