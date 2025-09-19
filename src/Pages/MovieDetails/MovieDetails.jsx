import React from "react";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../api";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie) {
    return <div className="spinner"></div>;
  }

  return (
    <div>
      <Navbar />
      <div className="movie-details-page">
        <div className="movie-detail-container">
          <div className="btn-wrapper">
            <button className="detail-btn" onClick={() => navigate('/search')} >Back to Search</button>
          </div>
          <div className="movie-details-title">
            <h1>Movie Details Page</h1>
          </div>
          <div className="movie-details-container">
            <h1 className="detail-title">{movie.Title}</h1>
            <p className="detail-year">
              <strong className="green">Release Year:</strong> {movie.Year}
            </p>
            <p className="detail-director">
              <strong className="green">Director:</strong> {movie.Director}
            </p>
            <p className="detail-para">
              <strong className="green-para">Description:</strong> Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ipsum, dolor error facere
              pariatur, quos sed a vero numquam, libero incidunt velit saepe
              deserunt enim hic!
            </p>
            <img src={movie.Poster} className="detail-poster" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetails;
