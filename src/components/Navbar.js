import React, { useState } from "react";
import "./navbar.css";
import { ImCross, ImMenu } from "react-icons/im";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "./IITMandiLogo.png";

export const Navbar = () => {
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

  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="menu-link">
          <ul className={isMobile ? "nav-links-mobile" : "nav-links-bar"}
          onClick={()=> setIsMobile(true)}
          >
            <div className="nav-logo">
              <a href="https://iitmandi.ac.in">
                <img className="footer-logo-image nav-logo" src={logo} alt="iitmandi" />
              </a>
            </div>
            <li className="nav-items">
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
                </div>
              </div>
            </li>
            <li  className="nav-items">
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
                  <Link to="#" className="droptxt">
                    Cultural Clubs
                  </Link>
                  <Link to="/interiit" className="droptxt">
                    Inter IIT
                  </Link>
                  <Link to="/sports" className="droptxt">
                    Sports Facilities
                  </Link>
                </div>
              </div>
            </li>
            <li className="single-nav-items fsize nav-items">
              <Link to="#">Fees</Link>
            </li>
          </ul>
          <button className="mobile-menu-icon"
          onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ? <ImCross /> : <ImMenu size={26} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
