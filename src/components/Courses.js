import React, { useState } from 'react';
import './branches.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare  } from "react-icons/fa";
import { GiHamburgerMenu } from"react-icons/gi";
import useDocumentTitle from './useDocumentTitle';
import grad from "./graduation-cap.png";
import Navbar from './Navbar';
import Footer from './Footer';

// dynamic titles props
function Page(props) {
    const titleSuffix = ' | Expectations, IIT Mandi'
    useDocumentTitle(`${props.title}${titleSuffix}`)
    return <div>{props.content}</div>
  }

export const  Courses = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <Page content={
        <>
        <Navbar />
        {/* <div className='img'> */}
        <section className='hero-section page-container'>
            <div className='heading'>
                <h3>Courses Offered</h3>
                </div>
            <br></br>
            <p className='para'>
            Students are admitted to undergraduate courses (Four-Year Bachelor of Technology) through an All-India entrance known as Joint Entrance Examination (JEE) conducted by all the IIT's, at various centres across the country.
            <br></br>
            IIT Mandi offers Bachelor of Technology in various branches which includes both B.Tech as well as the B.Tech-M.Tech Dual Degree Programme.
            The Branches are as follows:
            
            <ul className='names'>
                <li>
                    Computer Science and Engineering
                </li>
                <li>
                    Civil Engineering
                </li>
                <li>
                    Data Science and Engineering
                </li>
                <li>
                    Electrical Engineering
                </li>
                <li>
                    Mechanical Engineering
                </li>
                <li>
                    Bio Engineering [Dual Degree (B.Tech + M.Tech)]
                </li>
            
            </ul>
            </p> 
            <div className='back-img'>
                {/* <img src={grad} className='img' alt="graduation cap logo" /> */}
 
            </div>
            </section>
            <Footer />
        </>
        } title="Courses" />
    )
}

export default Courses;