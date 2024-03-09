import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({PosterPath}) => {
    console.log(PosterPath )
  return (
    <div className='w-48 pr-4'>
      <img alt="moviecard"
      src={IMG_CDN_URL + PosterPath}

      />
    </div>
  )
}

export default MovieCard
