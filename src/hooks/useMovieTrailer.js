import React , { useEffect } from 'react'
import { API_OPTIONS } from "../utils/Constants";
import {addTrailerVideo} from '../utils/movieSlice'
import { useDispatch } from "react-redux";

const useMovieTrailer = ({ movieId }) => {
    const dispatch = useDispatch()
    
    const getMoviesVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/1096197/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      getMoviesVideo(movieId);
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
