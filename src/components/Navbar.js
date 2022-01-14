import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare  } from "react-icons/fa";
import { GiHamburgerMenu } from"react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';
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
                <Link to="/">Branches</Link>
              </li>
              <li>
                <Link to="/cgpa">CGPA</Link>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">
                  <Link to="#" className='fsize'>Clubs
                    <TiArrowSortedDown />
                  </Link>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/techclubs" className='droptxt'>Technical Clubs</Link>
                    <Link to="#" className='droptxt'>Cultural Clubs</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="#">Fees</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul className="social-media-links">
              <li>
                <Link to="https://www.facebook.com/IITMandi2009/">
                  <FaFacebookSquare className="facebook" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/iit_mandi_campus/">
                  <FaInstagramSquare className="instagram" />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/channel/UCSybolnMMi_8vc5OoX36Vwg">
                  <FaYoutubeSquare className="youtube" />
                </Link>
              </li>
            </ul>
            <div className="hamburger-menu">
              <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;