import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div></div>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} PosterPath={movie?.poster_path} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
