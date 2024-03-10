import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggection = () => {

  const gpt= useSelector(store => store.gpt)
  const {movieResults,moviesName} = gpt

  if(!moviesName) return null



  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {
          moviesName.map((movieName,index) => <MovieList
             key={movieName} 
            title={movieName}
            movies={movieResults[index]}
            /> )
        }
      </div>
      
    </div>
  )
}

export default GptSuggection