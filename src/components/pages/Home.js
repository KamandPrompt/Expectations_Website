import React from "react";
import Carousel from "../Carousel";
import { SliderData } from '../SliderData';
import useDocumentTitle from "../useDocumentTitle";
import Navbar from "../Navbar";
import "./home.css"
import Footer from "../Footer";

// dynamic titles props
function Page(props) {
  const titleSuffix = ' | Expectations, IIT Mandi'
  useDocumentTitle(`${props.title}${titleSuffix}`)
  return <div>{props.content}</div>
}

function Home() {
  return (
    <Page content={
    <div>
      <Navbar />
      <div className="container-carousel">
        <Carousel slides={SliderData} />
      </div>
      <Footer />
    </div>
    } title='Home' />
  );
}

export default Home;
