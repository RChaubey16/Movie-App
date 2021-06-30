import React from "react";

import "../index.css";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "../MovieCard";

class App extends React.Component {
  componentDidMount() {
    // storing props in store variable using object destructuring
    const { store } = this.props;

    // subscribe is used to subscribe to store, to get the upto date state from store incase any changes occurs.
    store.subscribe(() => {
      console.log("updated");
      // this.forceUpdate() is used to forcefully re-render the App component. It should not be used as it is not a good practice.
      // But right now its handy for us
      this.forceUpdate();
    });
    // make API calls
    // dispatch action to store with movies from data file
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    // displays the new updated state
    console.log("State", this.props.store.getState());
  }

  render() {
    // gets movies from the state in store
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {/* In map function we get two arguments, 1. the movie during iteration and 2. the index of the movie in the array of movies, which we are using as key for movie identification */}
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
