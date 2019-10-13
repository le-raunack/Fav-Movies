import React, { useState } from "react";
import MoviePoster from "./MoviePoster";
import MovieDetails from "./MovieDetails";
import movies from "./movies.json";

export default () => {
  const favoriteMovies = movies;
  const [movieDetails, setMovieDetails] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const imdb = require("imdb-api");

  if (movieDetails.length < 1)
    for (let favMovie of favoriteMovies)
      imdb
        .get({ name: `${favMovie.movie}` }, { apiKey: "aefa389b", timeout: 0 })
        .then(res => {
          setMovieDetails(movieDetails => [
            ...movieDetails,
            {
              movieId: movieDetails.length,
              movieName: res.title,
              moviePoster: res.poster,
              releaseYear: res.released.getFullYear()
            }
          ]);
        })
        .catch(() => setHasErrors(true));

  if (movieDetails.length > favoriteMovies.length - 1 && !hasErrors)
    return (
      <div className="movies-container">
        {movieDetails.map(movie => (
          <div className="movie" key={movie.movieId}>
            <MoviePoster moviePoster={movie.moviePoster} />
            <MovieDetails
              movieName={movie.movieName}
              releaseYear={movie.releaseYear}
            />
          </div>
        ))}
      </div>
    );
  else if (hasErrors) return <h1>{"Something went wrong :("}</h1>;
  else return <h1>Loading...</h1>;
};
