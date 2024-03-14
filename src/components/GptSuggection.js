import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggection = () => {

  const gpt= useSelector(store => store.gpt)
  const {movieResults,moviesName} = gpt

  if(!moviesName) return null



  return (
    <>
{moviesName ?

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
    :
    <div class="flex justify-center items-center h-screen">
  <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-red-900"></div>
</div>

}
    </>
  )
}

export default GptSuggection
