import React from "react";
import { Link } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../store/slice/movieSlice";
import toast from "react-hot-toast";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favoriteMovies);
  // console.log("favorite movies : ", favoriteMovies);

  const addToFavorite = (movie) => {
    dispatch(addFavoriteMovie(movie));
    toast.success("Movie added to favorite!");
  };

  const removeFromFavorite = (movie) => {
    dispatch(removeFavoriteMovie(movie.id));
    toast.error("Movie removed from favorite!");
  };

  return (
    <div className="max-w-sm relative rounded overflow-hidden shadow-lg bg-white m-4">
      <Link to={movie.imdb_url}>
        <img
          className="w-full h-64 object-cover"
          src={movie.image}
          alt={movie.movie}
        />
      </Link>
      <div className="absolute top-[55%] text-4xl right-[15%]">
        {favoriteMovies?.some((f) => f.id === movie.id) ? (
          <button onClick={() => removeFromFavorite(movie)}>
            <FcLike />
          </button>
        ) : (
          <button onClick={() => addToFavorite(movie)}>
            <FcLikePlaceholder />
          </button>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.movie}</div>
        <p className="text-gray-700 text-base">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
