import React ,{ useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import {addTrendingMovies} from '../redux/movieSlice'

const useTrandingMovies = () => {
    const dispatch = useDispatch()
    const nowTrending = useSelector(store => store.movies.trendingMovie)
    const getTrandingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
      const json = await data.json()
  dispatch(addTrendingMovies(json.results))
  
    }
    useEffect(() =>{
      if(!nowTrending){
        getTrandingMovies()
      }
     
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useTrandingMovies
