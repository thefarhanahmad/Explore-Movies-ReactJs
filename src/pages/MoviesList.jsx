import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Spinner } from "../components/Spinner";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("movies : ", movies);
  const ApiUrl = import.meta.env.VITE_API_URL;

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(ApiUrl);
      const result = await response.json();
      //   console.log("movie response : ", result);
      setMovies(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error while fetching movies", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      {/* movies list */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-8">
          Movies List
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Browse through our collection of movies
        </p>
      </div>
      <div>
        {loading ? (
          <div className="w-full h-[60vh] flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
