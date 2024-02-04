// // const { createstore } = require("redux");
// const createStore = require("redux/lib/createStore").createStore;
// const initialState = { dataBlog: [] };

// const reducer = (state = initialState, action) => {
//   return state;
// };
// const store = createStore(reducer);
// export default store;

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state = {}, action) => {
  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
