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
        <section className='hero-section'>
            <h1>Branch Change</h1>
            <p className='para'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </section>
        <Footer />
        </>
        } title="Branches" />
    );
}

export default Courses;