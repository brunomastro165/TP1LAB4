import React, { useState } from "react";
import { Noticia } from "./Noticia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


export const Carousel = ({ slides }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return(
    <Slider {...settings}>
      {slides.map((s, index) => {
      return (
        <div key={index} style={{width: "200px", flexShrink: 0}}>
          <Noticia noticia={s} />
        </div>
      );
    })}
    </Slider>
  

  );
};

export default Carousel;
