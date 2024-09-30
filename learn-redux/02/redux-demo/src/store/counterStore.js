// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
// import authReducer from "./authSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     auth: authReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
