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
      <h1>Testing Branch</h1>
    </div>
  );
}

export default Home;
