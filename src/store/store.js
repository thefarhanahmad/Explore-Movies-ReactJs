
import { configureStore } from "@reduxjs/toolkit";
import favoriteMoviesReducer from "../store/slice/movieSlice";

const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
  },
});

export default store;
