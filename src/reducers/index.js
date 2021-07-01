// importing ADD_MOVIES action type from actions
import { ADD_MOVIES } from "../actions";

// creating a object
const initialState = {
  list: [],
  favourites: [],
};

// reducer function
export default function movies(state = initialState, action) {
  // checking the type of function to perform a specific operation
  if (action.type === ADD_MOVIES) {
    return {
      // using JS spread operations
      ...state,
      // overriding list key in state
      list: action.movies,
    };
  }
  // if action type does not match then return the original or old state
  return state;
}
