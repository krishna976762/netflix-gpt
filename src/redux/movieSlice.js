import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies:null,
    popularMovies:null,
    trailerVideo:null,
    trendingMovie:null,
    upCommingMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies:(state,action)  =>{
      state.trendingMovie = action.payload;
    },
    addUpcommingMovies:(state,action) =>{
      state.upCommingMovies=action.payload
    }
  },
});

export const { addNowPlayingMovies,addPopularMovies, addTrailerVideo ,addTrendingMovies,addUpcommingMovies} = movieSlice.actions;
export default movieSlice.reducer;
