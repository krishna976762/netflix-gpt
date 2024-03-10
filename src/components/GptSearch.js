import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggection from './GptSuggection'
import { BG_URL } from '../utils/Constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
        className='h-screen w-screen object-cover'
          src={BG_URL}
          alt="logo"
        />
      </div>
    <div className=''>
       
     <GptSearchBar/>
     <GptSuggection/>
    </div>

    </>
  )
}

export default GptSearch
