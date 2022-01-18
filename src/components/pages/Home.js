import React from "react";
import Carousel from "../Carousel";
import { SliderData } from '../SliderData';
import Navbar from "../Navbar";
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container-carousel">
        <Carousel slides={SliderData} />
      </div>
    </div>
  );
}

export default Home;
