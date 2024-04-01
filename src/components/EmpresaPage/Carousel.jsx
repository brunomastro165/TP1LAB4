import React, { useState } from "react";
import { Noticia } from "./Noticia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircle } from "react-icons/bs";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" h-10 w-10 absolute z-20 right-0 top-1/2 transform -translate-y-1/2 m-2"
      onClick={onClick}
    >
      <BsArrowLeftCircle className="text-4xl rotate-180 hover:scale-110 transition-all hover:text-cyan-400 cursor-pointer bg-white rounded-full" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="h-10 w-10 absolute z-20 left-0 top-1/2 transform -translate-y-1/2 m-2"
      onClick={onClick}
    >
      <BsArrowLeftCircle className="text-4xl hover:scale-110 transition-all hover:text-cyan-400 cursor-pointer bg-white rounded-full" />
    </div>
  );
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
      <Slider {...settings} className=" items-center">
        {slides.map((s, index) => {
          return (
            <>
              <div className="flex cursor-pointer" key={index} style={{}}>
                <Noticia noticia={s} />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
