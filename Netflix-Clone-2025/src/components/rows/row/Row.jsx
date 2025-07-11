import React, { useEffect, useState } from "react";
// Import React and hooks for state and side effects

import "./Row.css";
// Import CSS styles for the component

import axios from "../../../utils/axios";
// Import custom Axios instance to make API requests

import movieTrailer from "movie-trailer";
// Library to fetch a YouTube trailer URL for a given movie name

import YouTube from "react-youtube";
// React component to embed YouTube videos

// Define the Row component with props: title, fetchUrl, isLargeRow
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]); // List of movies from API
  const [trailerUrl, setTrailerUrl] = useState(""); // YouTube trailer video ID
  const [startIndex, setStartIndex] = useState(0); // Start index for movie display
  const [visibleCount, setVisibleCount] = useState(10); // Number of visible movies

  const base_url = "https://image.tmdb.org/t/p/original"; // Base URL for images

  // Adjust number of visible movies based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setVisibleCount(3); // Show 3 movies on small screens
      } else if (width <= 1024) {
        setVisibleCount(5); // Show 5 movies on tablets
      } else {
        setVisibleCount(10); // Show 10 movies on desktops
      }
    };

    handleResize(); // Run once on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Fetch movies from the API when the component mounts or fetchUrl changes
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl); // Make API call
        setMovie(request.data.results); // Set response results to state
      } catch (error) {
        console.log("error", error); // Log error if request fails
      }
    })();
  }, [fetchUrl]);

  // Handle click on a movie to toggle trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // If a trailer is playing, hide it
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); // Extract YouTube video ID
        }
      );
    }
  };

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 }, // Auto-play the trailer
  };

  // Slice the movie list to show only the visible portion
  const visibleMovies = movies.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1> {/* Section title */}
      <div className="row__scrollContainer">
        {/* Left arrow button for scrolling left */}
        <button
          className="scrollBtn left"
          onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
          disabled={startIndex === 0}
        >
          ‹
        </button>

        {/* Container for movie posters */}
        <div className="row__posters">
          {visibleMovies.map((movie, index) => (
            <div className="row__posterWrapper" key={index}>
              {/* Display movie index number */}
              <span className="movie__index">{startIndex + index + 1}</span>

              {/* Display poster image */}
              <img
                onClick={() => handleClick(movie)} // Toggle trailer on click
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              />
            </div>
          ))}
        </div>

        {/* Right arrow button for scrolling right */}
        <button
          className="scrollBtn right"
          onClick={() =>
            setStartIndex((prev) =>
              Math.min(prev + 1, movies.length - visibleCount)
            )
          }
          disabled={startIndex >= movies.length - visibleCount}
        >
          ›
        </button>
      </div>
      {/* Render YouTube trailer if available */}
      <div style={{ padding: "2px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
// Export the component for use in other parts of the app
