// importing ADD_MOVIES action type from actions
import { ADD_MOVIES } from "../actions";

// reducer function
export default function movies(state = [], action) {
  // checking the type of function to perform a specific operation
  if (action.type === ADD_MOVIES) {
    return action.movies;
  }
  // if action type does not match then return the original or old state
  return state;
}
