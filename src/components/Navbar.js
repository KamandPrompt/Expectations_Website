import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare  } from "react-icons/fa";
import { GiHamburgerMenu } from"react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const  Navbar = () => {

  // const [click, setClick] = useState(false);
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  
  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function(e) {
  //   if (!e.target.matches('.dropbtn')) {
  //   var myDropdown = document.getElementById("myDropdown");
  //     if (myDropdown.classList.contains('show')) {
  //       myDropdown.classList.remove('show');
  //     }
  //   }
  // }
  
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
        <nav className="main-nav">
          <div className="logo">
            <h2>
              <Link to="/">
                <span>IIT</span>
                <span> M</span>andi
              </Link>
            </h2>
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">
                    <Link to="#" className="fsize">
                      Academics
                      <TiArrowSortedDown />
                    </Link>
                  </button>
                  <div className="dropdown-content" id="mydropdown">
                    <Link to="/branches" className="droptxt">
                      Branches
                    </Link>
                    <Link to="#" className="droptxt">
                      CGPA
                    </Link>
                    <Link to="/courses" className="droptxt">
                      Courses
                    </Link>
                    <Link to="/nptel" className="droptxt">
                      NPTEL
                    </Link>
                    <Link to="/Placements" className="droptxt">
                      Placements
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">
                    <Link to="#" className="fsize">
                      Co-Curricular
                      <TiArrowSortedDown />
                    </Link>
                  </button>
                  <div className="dropdown-content" id="mydropdown">
                    <Link to="/techclubs" className="droptxt">
                      Technical Clubs
                    </Link>
                    <Link to="/culclub" className="droptxt">
                      Cultural Clubs
                    </Link>
                    <Link to="/interiit" className="droptxt">
                      Inter IIT
                    </Link>
                    <Link to="/sports" className='droptxt'>
                      Sports Facilities
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="#">Fees</Link>
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
                <a href="https://www.youtube.com/c/PerceptionIITMandi">
                  <FaYoutubeSquare className="youtube" />
                </a>
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