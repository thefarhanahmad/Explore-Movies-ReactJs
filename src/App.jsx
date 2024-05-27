import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import Navbar from "./components/Navbar";
import FavoriteMovies from "./pages/FavoriteMovies";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/favorite-movies" element={<FavoriteMovies />} />
      </Routes>
    </div>
  );
};

export default App;
