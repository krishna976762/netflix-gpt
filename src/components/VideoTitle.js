import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] pl-20 absolute text-white bg-gradiet-to-r from-black'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-2/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-50'>
            Play
        </button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
