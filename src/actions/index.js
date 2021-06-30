// an example of action.
// {
//   type: "INCREASE_COUNT";
//   movies: [];
// }

// creating action type
export const ADD_MOVIES = "ADD_MOVIES";

// creating action creators, which basically creates an action and returns it
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}
