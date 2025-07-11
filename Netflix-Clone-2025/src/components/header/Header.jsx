// Import React
import React, { useState } from "react";

// Import styles and assets
import "./header.css"; // CSS for styling the header
import NetflixLogo from "../../assets/images/NetflixLogo.png"; // Netflix logo image

// Import Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

// Header component definition
function Header() {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Component JSX return
  return (
    <div className="header_Outer_Container">
      {" "}
      {/* Outer wrapper */}
      <div className="header_container">
        {" "}
        {/* Inner layout container */}
        {/* Left side: Logo, menu icon, and nav links */}
        <div className="header_left">
          {/* Netflix Logo */}
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />

          {/* Hamburger menu icon (visible on mobile) */}
          <div className="mobile_menu_icon" onClick={toggleMobileMenu}> 
            <div>
              <MenuIcon />
            </div>
          </div>

          {/* Navigation links; "show" class toggles mobile visibility */}
          <ul className={`nav_links ${isMobileMenuOpen ? "show" : ""}`}>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        {/* Right side: user icons */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>{" "}
            {/* Search icon */}
            <li>
              <NotificationsIcon />
            </li>{" "}
            {/* Notification bell */}
            <li>
              <PersonIcon />
            </li>{" "}
            {/* Profile icon */}
            <li>
              <ArrowDropDownIcon />
            </li>{" "}
            {/* Dropdown arrow */}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Export Header component for use in other files
export default Header;
