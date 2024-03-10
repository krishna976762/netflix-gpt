import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ PosterPath }) => {
  if (!PosterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="moviecard" src={IMG_CDN_URL + PosterPath} />
    </div>
  );
};

export default MovieCard;
