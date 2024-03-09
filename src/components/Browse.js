import React from 'react'
import Header from './Header'
import useNowPlayingMvies from '../hooks/useNowPlayingMvies'
import usePopularMovies from '../hooks/usePopularMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'

const Browse = () => {
  useNowPlayingMvies()
  usePopularMovies()
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
