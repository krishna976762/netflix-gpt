import React from 'react'
import Header from './Header'
import useNowPlayingMvies from '../hooks/useNowPlayingMvies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'

const Browse = () => {
  useNowPlayingMvies()
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
