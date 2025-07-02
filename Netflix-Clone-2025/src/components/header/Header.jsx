import React from 'react'
import { useState } from 'react';
import "./header.css" 
import NetflixLogo from "../../assets/images/NetflixLogo.png" //Note image is imported with no curly brace or quotation mark
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className="header_Outer_Container">
          <div className="header_container">
            <div className="header_left">
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              {/* <div className="mobile_menu_icon" onClick={toggleMobileMenu}> */}
              <div>
                {/* <MenuIcon /> */}
              </div>
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
            <div className="header_right">
              <ul>
                <li>
                  <SearchIcon />
                </li>
                <li>
                  <NotificationsIcon />
                </li>
                <li>
                  <PersonIcon />
                </li>
                <li>

                <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};            


export default Header