import React ,{ useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import {addNowPlayingMovies} from '../redux/movieSlice'

const useNowPlayingMvies = () => {
    const dispatch = useDispatch()
    const nowPlaying = useSelector(store => store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
      const json = await data.json()
  dispatch(addNowPlayingMovies(json.results))
  
    }
    useEffect(() =>{
      if(!nowPlaying){
        getNowPlayingMovies()
      }
     
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useNowPlayingMvies
