import { Link } from "react-router-dom";

export default function NoItems() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-4 px-4">
      <div className="bg-gray-100 rounded-full p-6 dark:bg-gray-800">
        <FilmIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">No Favorite Movies</h2>
        <p className="text-gray-500 dark:text-gray-400">
          You haven't added any movies to your favorites yet. Start exploring
          and add your favorites!
        </p>
      </div>
      <Link
        className="inline-flex items-center justify-center h-10 px-6 font-medium text-white bg-gray-900 rounded-md shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
        to="/"
      >
        Explore Movies
      </Link>
    </div>
  );
}

function FilmIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}
