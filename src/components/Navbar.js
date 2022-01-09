import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare  } from "react-icons/fa";
import { GiHamburgerMenu } from"react-icons/gi"
export const  Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
        <nav className="main-nav">
          <div className="logo">
            <h2>
              <span>IIT</span>
              <span> M</span>andi
            </h2>
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <a href="/">Branches</a>
              </li>
              <li>
                <a href="#">CGPA</a>
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">
                    Clubs
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="/techclubs">Technical Clubs</a>
                    <a href="#">Cultural Clubs</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul className="social-media-links">
              <li>
                <a href="https://www.facebook.com/IITMandi2009/">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/iit_mandi_campus/">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCSybolnMMi_8vc5OoX36Vwg">
                  <FaYoutubeSquare className="youtube" />
                </a>
              </li>
            </ul>
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;