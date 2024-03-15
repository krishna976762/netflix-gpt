import React,{useState} from 'react'
import ViewMore from './ViewMore'
import VideoPopup from './VideoPopup'

const VideoTitle = ({title,overview,data}) => {
  const [showTrailerPopup,setShowTrailerPopup] = useState(false)
  const [showViewMore, setShowViewMore] = useState(false);
  const handleClick = () => {
    setShowViewMore(true);
  };
  const handleTrailer = () =>{
    setShowTrailerPopup(true);
  }
  const openTrailerPopup = () =>{
    handleCloseViewMore()
    setShowTrailerPopup(true);
  }
  const handleCloseViewMore = () => {
    setShowViewMore(false);
  };
  const handleCloseTrailerPopup = () =>{
    setShowTrailerPopup(false); 
    
  }

  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradiet-to-r from-black'>
      <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
      <p className=' md:inline-block py-6 text-lg w-2/4 hidden'>{overview}</p>
      <div className='my-4 md:my-0'>
        <button onClick={handleTrailer}  className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-50'>
            Play
        </button>
        <button onClick={handleClick} className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
            More Info
        </button>
      </div>
      {showViewMore && <ViewMore openTrailer={openTrailerPopup}   movieData={data} onClose={handleCloseViewMore} />}

      {showTrailerPopup && <VideoPopup movieId={data.id} closePopup={handleCloseTrailerPopup}  />}
    </div>
  )
}

export default VideoTitle
