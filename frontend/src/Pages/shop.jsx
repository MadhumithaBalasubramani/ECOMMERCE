import React from "react";

import images from "./data/image";

import CustomSlider from "../Components/customslider";

import "./CSS/style.css";
import Hero from "../Components/Hero/hero";
import Popular from "../Components/Popular/popular";
import Offer from "../Components/offer/offer";
import NewCollection from "../Components/Newcollection/newCollection";

export default function App() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
    </div>
  );
}
