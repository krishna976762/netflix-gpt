import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoPopup = ({ closePopup, movieId }) => {
  const [show, setShow] = useState(true);
  useMovieTrailer(movieId);
  const handleClose = () => {
    setShow(false);
    closePopup();
  };
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const temp = trailerVideo?.key;

  return (
    <>


      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={` z-200 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          show ? "flex" : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-2xl ">
  <div className="h-full border-solid border-2 border-#b1acac-600 relative bg-black rounded-lg shadow dark:bg-gray-700" style={{ width: '40rem', height: '20rem' }}>
    <div className="flex justify-end p-2">
    <button
      type="button"
      className=" text-white-400 bg-transparent hover:bg-gray-200 hover:text-white-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal"
      onClick={handleClose}
    >
      <span className="text-white ">X</span>
    </button>
    </div>
    <iframe
    //  style={{ minWidth: '40rem', height: '15rem' }}
      className="w-full h-3/4"
      src={"https://www.youtube.com/embed/" + temp + "?&autoplay=1&mute=1"}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
</div>

      </div>

      
    </>
  );
};

export default VideoPopup;
