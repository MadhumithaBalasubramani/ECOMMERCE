import React from "react";

import images from "./data/image";

import CustomSlider from "../Components/customslider";

import "./CSS/style.css";

export default function App() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      
    </div>
  );
}
