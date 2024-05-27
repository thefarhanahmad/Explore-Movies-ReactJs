import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Component() {
  const favoriteMovies = useSelector((state) => state.favoriteMovies);
  return (
    <header className="w-full bg-gray-900 py-3 sm:py-6 shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row md:px-6">
        <Link className="flex items-center gap-2" to="/">
          <span className="text-xl font-bold text-white">Explore Movies</span>
        </Link>
        <div className="mt-4 flex justify-center items-center gap-4 md:mt-0 md:flex-row">
          <Link
            className="inline-flex w-fit items-center rounded-md bg-white/20 px-4 py-2 text-white hover:bg-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-0 md:w-auto"
            to="/"
          >
            <span className="hidden sm:inline text-sm">Movies</span>
            <span className="sm:hidden text-xs">Movies</span>
          </Link>
          <Link
            className="inline-flex relative w-fit items-center rounded-md bg-white/20 px-4 py-2 text-white hover:bg-white/30 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-0 md:w-auto"
            to="/favorite-movies"
          >
            {favoriteMovies.length > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-[#c80e0e] rounded-full -top-2 -right-2 animate-bounce">
                {favoriteMovies.length}
              </span>
            )}
            <span className="hidden sm:inline text-sm">Favorite Movies</span>
            <span className="sm:hidden text-xs">Favorite Movies</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
