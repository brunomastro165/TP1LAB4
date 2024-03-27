import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Noticia } from "./Noticia";

export const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        <Noticia noticias={slides}/>
        {slides.map((s, index) => {
          return (
            <React.Fragment key={index}>
              <Noticia noticia={s} />
              <Noticia noticia={s} />
            </React.Fragment>
          );
        })}
      </div>
      <button
        onClick={previousSlide}
        className="absolute top-0 h-full float-left justify-between items-center flex text-white px-10 text-3xl "
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0  h-full right-0 items-center flex text-white px-10 text-3xl "
      >
        <BsFillArrowRightCircleFill />
      </button>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full   ">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
