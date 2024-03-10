import React, { useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/OpenAi";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../redux/gptSlice"; // Assuming you have this action imported

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ", only give me 5 no of, separated like the example given ahead. Example result Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResult = await openai?.chat?.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      
      console.error("No choices found in GPT response");
      return;
    }
    

    const gptMovies = gptResult.choices[0]?.message?.content.split(",");
  
    const promiseArray = gptMovies.map((movie) => searchMovieTdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ moviesName: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%]  md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptsearchplaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 px-2 py-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
