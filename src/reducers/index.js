// importing combineReducers() from redux
import { combineReducers } from "redux";

// importing ADD_MOVIES and other action types from actions
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
} from "../actions";

// creating a object
const initialState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

// reducer function
export function movies(state = initialState, action) {
  console.log("MOVIES REDUCER");
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
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

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

    case REMOVE_FAVOURITE:
      const FilteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: FilteredArray,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    default:
      return state;
  }
}

// search Reducer

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

// Creating Root Reducer because we want to add multiple reducers to our app and createStore() function only takes in reducer, Hence the Root-Reducer

const initialRootState = {
  movies: initialState, // Getting the initial Movie State
  search: initialSearchState, // Getting the initial Search State
};

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action), // Calling moviesReducer
//     search: search(state.search, action), // Calling searchReducer
//   };
// }

export default combineReducers({
  movies: movies, // Redux internally calls movies and search reducers and returns it to state in store.
  search: search,
});
