// an example of action.
// {
//   type: "INCREASE_COUNT";
//   movies: [];
// }

// creating action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

// creating action creators, which basically creates an action and returns it
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie: movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie: movie,
  };
}
