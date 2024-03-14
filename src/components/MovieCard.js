import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/Constants";
import ViewMore from "./ViewMore";

const MovieCard = ({ PosterPath,data }) => {
  const [showViewMore, setShowViewMore] = useState(false);

  if (!PosterPath) return null;

  const handleClick = () => {
    setShowViewMore(true);
  };
  const handleCloseViewMore = () => {
    setShowViewMore(false); 
  };

  return (
    <>
      <div onClick={handleClick} className="w-36 md:w-48 pr-4 hover:w-75 transition duration-400 ease-in-out transform hover:scale-105">
        <img alt="moviecard" src={IMG_CDN_URL + PosterPath} />
      </div>
      {showViewMore && <ViewMore movieData={data} onClose={handleCloseViewMore}  />}
    </>
  );
};

export default MovieCard;
