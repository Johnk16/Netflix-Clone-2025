// Import React and its necessary hooks
import React, { useState, useEffect } from "react";

// Import a pre-configured Axios instance for API calls
import axios from "../../utils/axios";

// Import endpoints for different API requests
import requests from "../../utils/request";

// Import the CSS styles specific to this component
import "./banner.css";

// Define the Banner functional component
const Banner = () => {
  // Declare a piece of state to hold one randomly selected movie
  const [movie, setMovie] = useState({});

  // useEffect runs once after the component is mounted
  useEffect(() => {
    // Immediately Invoked Async Function to fetch data
    (async () => {
      try {
        // Make an API request to get Netflix Originals
        const request = await axios.get(requests.fetchNetflixOriginals);

        // Log the response data to debug (optional)
        console.log(request);

        // Pick a random movie from the results array and set it to state
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        // If there's an error during the request, log it
        console.log("error", error);
      }
    })();
  },[] ); // Empty dependency array means this runs only once

  // Helper function to truncate long strings
  function truncate(str, n) {
    // If the string exists and is longer than n characters, cut it and add "..."
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // Return the JSX to render the banner
  return (
    <div
      className="banner" // Container class for styling
      style={{
        backgroundSize: "cover", // Background image covers entire container
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, // Dynamically set image
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent image repetition
      }}
    >
      {/* Container for text content inside the banner */}
      <div className="banner__contents">
        {/* Movie title: fallback to different fields if necessary */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Description and buttons */}
        <div className="banner__buttons">
          {/* Truncated movie description */}
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>

          {/* Action buttons */}
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>

      {/* Bottom fade effect for styling */}
      <div className="banner__fadeBottom" />
    </div>
  );
};

// Export the component for use in other parts of the app
export default Banner;
