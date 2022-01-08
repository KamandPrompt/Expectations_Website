import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            
            <h1>Cultural Group</h1>
            <p>
            As passionate humans, we all love to sing, dance, mimic and act. While engineering and science are noble pursuits and necessary to sustain life, music, art, and poetry are what we stay alive for. The cultural society provides a stage to showcase your talents and helps to break away from the shackles of innumerable projects, assignments and quizzes. The various groups that are the limbs of the cultural society help you in embracing your inner artists. Be it bringing various characters to life, exhibiting new dance moves, composing new melodies or being a part of brainstorming sessions, you will always find a group of your interest.
            </p>
            <div className="banner__btn">
              <a href="https://wiki.iitmandi.co.in/p/Cultural_Society" target="_blank"  className="btn btn-smart">
               Cultural Society
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Heading">
        <h4>Clubs</h4>
      </div>
    </div>

  
  );
};

export default Header;