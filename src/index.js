import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";

import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

// createStore is a function given by redux and it takes an argument movies which will be a reducer function
const store = createStore(rootReducer);
console.log("Store", store);
// Accessing the getState object from store object
// console.log("Before State", store.getState());

// // the dispatch function is provided by redux, which is used to dispatch action to reducer and in the end the store.
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Iron Man " }],
// });

// console.log("After State", store.getState());

// Passing the store to component App as props
ReactDOM.render(<App store={store} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
