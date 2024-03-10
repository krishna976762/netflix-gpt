import React from 'react'
import Header from './Header'
import useNowPlayingMvies from '../hooks/useNowPlayingMvies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrandingMovies from '../hooks/useTrandingMovies'
import SecondaryContainer from './SecondaryContainer'
import useUpcommingMovies from '../hooks/useUpcommingMovies'
import MainContainer from './MainContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showChatGpt = useSelector(store => store.gpt.showGptSearch)
 
  useNowPlayingMvies()
  usePopularMovies()
  useTrandingMovies()
  useUpcommingMovies()
  return (
    <div>
    <Header/>
   {showChatGpt ? <GptSearch/> : <>
   <MainContainer/>
    <SecondaryContainer/>
   </>}
    
    </div>
  )
}

export default Browse
