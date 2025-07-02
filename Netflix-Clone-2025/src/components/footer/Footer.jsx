// Importing React to use JSX and component functionalities
import React from "react";

// Importing the external CSS file for footer styling
import "./footer.css";

// Importing social media icons from Material UI (MUI) icon library
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Defining a functional React component named Footer
const Footer = () => {
  // Returning JSX to render the footer layout
  return (
    // Outer container for the entire footer section
    <div className="footer_outer_container">
      {/* Inner container to wrap icons, links, service code, and copyright */}
      <div className="footer_inner_container">
        {/* Section containing all social media icons */}
        <div className="footer_icons">
          <FacebookOutlinedIcon /> {/* Facebook icon */}
          <InstagramIcon /> {/* Instagram icon */}
          <TwitterIcon /> {/* Twitter icon */}
          <YouTubeIcon /> {/* YouTube icon */}
        </div>

        {/* Section containing link groups in the footer */}
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        {/* Section for a "Service code" line (often seen in footers for support) */}
        <div className="service_code">
          <p>Service code</p>
        </div>

        {/* Section for copyright information */}
        <div className="copy_write">
          {/* &copy; is the HTML entity for the © symbol */}
          &copy; 1997-2024 Netflix, inc.
        </div>
      </div>
    </div>
  );
};

// Exporting the Footer component so it can be used in other parts of the app
export default Footer;
