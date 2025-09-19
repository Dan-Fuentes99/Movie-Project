import React from "react";
import Logo from "../../assets/Original on transparent.png";
import { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import SortControl from "../../Components/SortControl/SortControl.jsx";
import Results from "../../Components/Results/Results.jsx";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Search.css";

const apiKey = "859ab710";

export default function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  const searchMovies = async (q) => {
    setError("");
    setMovies([]);
    setLoading(true);

    if (!q) {
      setError("Please enter a movie title.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(q)}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 6));
      } else {
        setError(`No results found for "${q}".`);
      }
    } catch (err) {
      setError("There was an error fetching the data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sortedMovies = [...movies].sort((a, b) => {
    const yearA = parseInt(a.Year) || 0;
    const yearB = parseInt(b.Year) || 0;
    return sortOrder === "asc" ? yearA - yearB : yearB - yearA;
  });

  return (
    <div>
      <Navbar />
      <div className="search">
        <h1 className="search-title">Browse Movies and Shows</h1>
        <SearchBar onSearch={searchMovies} />
        <SortControl sortOrder={sortOrder} onChange={setSortOrder} />
          <Results movies={sortedMovies} error={error} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}
