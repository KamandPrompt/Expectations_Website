import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaYoutube, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import  { RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom";
import Techclubs from "./pages/Techclubs";
import logo from "./IITMandiLogo.png";

// const styleSocial = {color: "#000"};

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="contain">
          <div className="footer-cols">
            <div className="col flogo-img-col">
              <table>
                <tr><td>
              <a href="https://iitmandi.ac.in">
                <img className="footer-logo-image" src={logo} alt="iitmandi" />
              </a></td>
              <td className="college-addr">
              Indian Institute of Technology Mandi
              <br />
              Kamand, Mandi - 175075
              <br />
              Himachal Pradesh, India
              </td></tr>
              </table>
            <div className="footer-social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/IITMandi2009/"
                    className="footer-icon"
                  >
                    <FaFacebookSquare size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/school/indian-institute-of-technology-mandi/"
                    className="footer-icon"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/PerceptionIITMandi"
                    className="footer-icon"
                  >
                    <FaYoutube size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/iit_mandi_campus/"
                    className="footer-icon"
                  >
                    <RiInstagramFill size={30} />
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <div className="col footer-links">
              <h1>Quick Links</h1><hr className="footer-hr" />
              <div className="footer-link-items">
              <ul>
                <li>
                  <Link to="/branches">Branches</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/nptel">NPTEL</Link>
                </li>
                <li>
                  <Link to="/techclubs">Tech Clubs</Link>
                </li>
                <li>
                  <Link to="/">Cult Clubs</Link>
                </li>
                <li>
                  <Link to="/sports">Sports</Link>
                </li>
                <li>
                  <Link to="/interiit">InterIIT</Link>
                </li>
              </ul></div>
            </div>
            <div className="col footer-links">
              <h1>Resources</h1><hr className="footer-hr" />
              <div className="footer-link-items">
              <ul>
                <li><a href="https://iitmandi.ac.in">iitmandi.ac.in</a></li>
                <li><a href="https://students.iitmandi.ac.in">Students</a></li>
                <li><a href="https://research.iitmandi.ac.in/main/placements/">Placement Cell</a></li>
                <li><a href="http://www.iitmandi.ac.in/academics/scholarship.php">Scholarships</a></li>
                <li>Web templates</li>
                <li>Email templates</li>
              </ul>
              </div>
            </div>
            <div className="col footer-links">
              <h1>Support</h1><hr className="footer-hr" />
              <div className="footer-link-items">
              <ul>
                <li>Contact us</li>
                <li>Web chat</li>
                <li>Open ticket</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <p className="copyright">All Rights Reserved | IIT Mandi © 2022</p>
      </div>
    </div>
  );
}

export default Footer;
