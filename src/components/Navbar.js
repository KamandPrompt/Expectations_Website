import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare  } from "react-icons/fa";
import { GiHamburgerMenu } from"react-icons/gi"
import { NavLink } from 'react-router-dom';
export const  Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
        <nav className='main-nav'>
            <div className='logo'>
                <h2>
                    <span>IIT</span> 
                    <span> M</span>andi</h2>
            </div>
            <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <a href='#'>
                            Branches
                        </a>
                    </li>
                    <li>
                        {/* <a href='./Cgpa.js'>
                            CGPA
                        </a> */}
                        <NavLink to="/cgpa">
                            CGPA
                        </NavLink>
                        
                    </li>
                    <li>
                        <a href='#'>
                            Scholarships
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Fees
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Courses
                        </a>
                    </li>
                </ul>
            </div>
            <div className='social-media'>
                <ul className='social-media-links'>
                    <li>
                        <a href="https://www.facebook.com/IITMandi2009/">
                            <FaFacebookSquare className='facebook' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/iit_mandi_campus/">
                            <FaInstagramSquare className='instagram'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCSybolnMMi_8vc5OoX36Vwg">
                            <FaYoutubeSquare className='youtube'/>
                        </a>
                    </li> 
                </ul>
                <div className='hamburger-menu'>
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;