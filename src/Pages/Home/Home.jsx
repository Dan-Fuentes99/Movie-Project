import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-body">
        <h1>Welcome to DF Media</h1>
        <p className="body-para">Discover and explore a vast collection of movies and TV shows. Dive into detailed information, ratings, and reviews to find your next favorite watch.</p>
        <Link to='/search'><button className="body-btn">Explore Now</button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
