import React from "react";
import "./Results.css";
import { useNavigate } from "react-router-dom";


function Results({ movies, error, loading }) {
  const navigate = useNavigate();
  if (loading)
    return (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    );
  if (error) return <p>{error}</p>;
  else if (!movies.length)
    return (
      <div className="no-result">
        <p className="no-results-para">No results yet. Try searching above!</p>
      </div>
    );

  return (
    <div className="results">
      <div className="results-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <figure className="movie__poster">
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <div className="movie-info">
              <h2 className="movie-title"
              key={movie.imdbID}
              movie={movie}
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
              >
                  {movie.Title}
              </h2>
              <h3 className="movie-year">{movie.Year}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
