import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import NoItems from "../components/NoItems";

const FavoriteMovies = () => {
  const favoriteMovies = useSelector((state) => state.favoriteMovies);
  // console.log("favorite-movies  : ", favoriteMovies);

  return (
    <div className="w-[90%] mx-auto">
      <div>
        {favoriteMovies.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-8">
              Favorite Movies
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Your favorite movies are here
            </p>
          </>
        )}
      </div>
      <div>
        {favoriteMovies.length < 1 ? (
          <div>
            <NoItems />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {favoriteMovies?.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteMovies;
