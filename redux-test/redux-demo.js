const redux = require("redux");

const counterReducer = (state, action) => {
  return {
    counter: 0,
  };
};

const store = redux.createStore();
