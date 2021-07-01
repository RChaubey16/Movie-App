// importing ADD_MOVIES action type from actions
import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

// creating a object
const initialState = {
  list: [],
  favourites: [],
};

// reducer function
export default function movies(state = initialState, action) {
  // checking the type of function to perform a specific operation
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     // using JS spread operations
  //     ...state,
  //     // overriding list key in state
  //     list: action.movies,
  //   };
  // }
  // // if action type does not match then return the original or old state
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    default:
      return state;
  }
}
