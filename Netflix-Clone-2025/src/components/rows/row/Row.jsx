// React imports: useState for managing state, useEffect for running code on mount or when dependencies change
import React, { useEffect, useState } from "react";

// Importing CSS specific to this component
import "./Row.css";

// Axios instance for making API calls (likely pre-configured with base URL)
import axios from "../../../utils/axios";

// External packages:
// movie-trailer: searches for movie trailers on YouTube
// react-youtube: used to embed YouTube videos in the component
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

// Main Row component: receives props from parent (title, fetchUrl, isLargeRow)
const Row = ({ title, fetchUrl, isLargeRow }) => {
  // State to store list of movies from API
  const [movies, setMovie] = useState([]);

  // State to store the YouTube trailer video ID
  const [trailerUrl, setTrailerUrl] = useState("");

  // Base URL to construct full image paths
  const base_url = "https://image.tmdb.org/t/p/original";

  // useEffect runs when component mounts or when fetchUrl changes
  useEffect(() => {
    console.log("fetchUrl for:", title, "=>", fetchUrl);

    // Immediately invoked async function to fetch data
    (async () => {
      try {
        // Fetch movie list from API endpoint
        const request = await axios.get(fetchUrl);
        console.log(request);

        // Set movie state using results from API
        setMovie(request.data.results);
      } catch (error) {
        // Log any fetch errors
        console.log("error", error);
      }
    })();
  }, [fetchUrl]); // Dependency: re-run if fetchUrl prop changes

  // Handle click on a movie poster
  const handleClick = (movie) => {
    // If a trailer is already playing, clicking again will hide it
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // Search for trailer on YouTube using movie title/name/original_name
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log("this is url", url);

          // Extract URL query parameters from returned YouTube URL
          const urlParams = new URLSearchParams(new URL(url).search);

          console.log(" this is urlParams", urlParams);
          console.log("this is video Id", urlParams.get("v"));

          // Set the trailerUrl with the video ID to embed YouTube player
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // auto-play video on load
    },
  };

  // Render component
  return (
    <div className="row">
      {/* Section title */}
      <h1>{title}</h1>

      {/* Container for movie posters */}
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            // When clicked, attempt to show/hide trailer
            onClick={() => handleClick(movie)}
            key={index} // Use index as a fallback key (not ideal in dynamic lists)
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} // Use different image type depending on row size
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} // Conditional class
          />
        ))}
      </div>

      {/* Show YouTube player only if trailerUrl is set */}
      <div style={{ padding: "2px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

// Export the component for use in other parts of the app
export default Row;
