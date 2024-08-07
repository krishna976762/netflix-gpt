import React ,{ useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch,useSelector } from 'react-redux'
import {addUpcommingMovies} from '../redux/movieSlice'

const useUpcommingMovies = () => {
    const dispatch = useDispatch()
    const upcommingMovies = useSelector(store => store.movies.upCommingMovies)
    const getUpcommingMovies = async () =>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1?api_key=${process.env.REACT_APP_TMDB_KEY}`,API_OPTIONS)
      const json = await data.json()
  dispatch(addUpcommingMovies(json.results))
 
    }
    useEffect(() =>{
     !upcommingMovies && getUpcommingMovies()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useUpcommingMovies
