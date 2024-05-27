
import { createSlice } from "@reduxjs/toolkit";

const favoriteMoviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
