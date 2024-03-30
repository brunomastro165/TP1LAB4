import React, { useState } from "react";
import { Noticia } from "./Noticia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className="bg-black h-10 w-10 absolute z-20" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className="bg-black h-10 w-10  z-20" onClick={onClick} />;
}

export const Carousel = ({ slides }) => {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full ">
      <Slider {...settings}>
        {slides.map((s, index) => {
          return (
            <div className="h-1/2 " key={index} style={{}}>
              <Noticia noticia={s} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
