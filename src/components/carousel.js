import React, { useState } from "react";
import "./carousel.css";
import { images } from "./CarouselData.js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import chord from './chord-white.png';
import { Box } from "@mui/system";


function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const stringCheck = "The chord diagram on left provides salivary protein catalog with each arc in the diagram represents the set of proteins found in the connected tissue or sample types. Click on Chord image to go to salivary protein catalog page that provides the interactive chord diagram and salivary protein search capability.";

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        {images[currImg].subtitle === stringCheck &&<div>
          
	  {images[currImg].subtitle === stringCheck &&
	  <Box
        	component="img"
        	sx={{
          	height: 320,
          	width: 400,
          	maxHeight: { xs: 300, md: 320 },
          	maxWidth: { xs: 500, md: 650 },
        	}}
        	alt="The house from the offer."
        	src={chord}
          />}
        </div>}
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p className="first_paragraph">{images[currImg].subtitle}</p>
	  <p>{images[currImg].subtitle1}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
