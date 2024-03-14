import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const ViewMore = ({onClose,movieData }) => {
  const [show, setShow] = useState(true); 
  const handleClose = () => {
    setShow(false); 
    onClose(); 
  };


  return (
    <>
     
      <div
        id="default-modal"
        tabIndex="-1"

        aria-hidden="true"
        className={` z-200 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${show ? 'flex' : 'hidden'}`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="border-solid border-2 border-#b1acac-600 relative bg-black rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
        
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4 flex justify-between items-center">
              <p className="text-2xl text-white ">
               {movieData.original_title}
              </p>   
              <button
                type="button"
                className="text-white-400 bg-transparent hover:bg-gray-200 hover:text-white-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={ handleClose}
              >
                
                <span className="text-white mb-4">X</span>
              </button>

            </div>
            

            
            <div className="grid grid-cols-12 ">
  <div className="p-4 pt-0 col-span-4">
    <img className="w-full h-3/4 rounded-lg" alt="moviecard" src={IMG_CDN_URL + movieData.poster_path} />
  </div>
  <div className="col-span-8 pb-10">
    <p className="text-white p-2">Language : <span className="pl-1 text-gray-500">{movieData.original_language}</span></p>
    <p className="text-white p-2">Popularity : <span className="pl-1 text-gray-500">{movieData.popularity}</span></p>
    <p className="text-white p-2">Release Date : <span className="pl-1 text-gray-500">{movieData.release_date}</span></p>
    <p className="text-white p-2">Total Vote : <span className="pl-1 text-gray-500">{movieData.vote_average}</span></p>
    <p className="text-white p-2">Overview : <span className="pl-1 text-gray-500">{movieData.overview}</span></p>
</div>

</div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMore;
