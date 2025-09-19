import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import MovieDetails from './Pages/MovieDetails/MovieDetails.jsx';
import Search from './Pages/Search/Search';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
