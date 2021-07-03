import React from "react";

import "../index.css";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "../MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    // storing props in store variable using object destructuring
    const { store } = this.props;

    // subscribe is used to subscribe to store, to get the upto date state from store incase any changes occurs.
    store.subscribe(() => {
      console.log("UPDATED", store.getState());
      // this.forceUpdate() is used to forcefully re-render the App component. It should not be used as it is not a good practice.
      // But right now its handy for us
      this.forceUpdate();
    });
    // make API calls
    // dispatch action to store with movies from data file using action creators
    store.dispatch(addMovies(data));

    // displays the new updated state
    console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState(); // getting movies from state
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      return true;
    }

    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    // gets list of movies from the state in store which is a JS object
    const { movies } = this.props.store.getState(); // State contains: { movies: {...}, search: {}}

    // the movies object in store contains list, favourites, showFavourites
    const { list, favourites, showFavourites } = movies;

    console.log("RENDER", this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {/* In map function we get two arguments, 1. the movie during iteration and 2. the index of the movie in the array of movies, which we are using as key for movie identification */}
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies"> No movies to display! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
