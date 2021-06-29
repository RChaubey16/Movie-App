import React from "react";
import "../index.css";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "../MovieCard";

function App() {
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
          {data.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
