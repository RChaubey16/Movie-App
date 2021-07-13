import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";

import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

// middleware method 1
// destructuring the args in function
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

// middleware method 2
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // middleware code
    console.log("ACTION_TYPE = ", action.type);
    next(action);
  };

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // middleware code
    if (typeof action === "function") {
      action(dispatch);
      return;
    }
    next(action);
  };

// createStore is a function given by redux and it takes an argument movies which will be a reducer function
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("Store", store);
// Accessing the getState object from store object
// console.log("Before State", store.getState());

// // the dispatch function is provided by redux, which is used to dispatch action to reducer and in the end the store.
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Iron Man " }],
// });

// console.log("After State", store.getState());

export const StoreContext = createContext();

// Creating Context Provider class
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {/* Rendering the childern of component between  <StoreContext.Provider value={store}> </StoreContext.Provider>*/}
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

// Passing the store to component App as props
ReactDOM.render(
  // using context Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
