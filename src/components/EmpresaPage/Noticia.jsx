import React from "react";

export const Noticia = ({ noticia }) => {
  return (
    <>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: `url(${noticia.imagenNoticia})`,
          backgroundSize: "100% 100%",
          height: "80vh",
        }}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/Noticia/${noticia.id}`;
        }}
      >
        <div className=" absolute bottom-0 z-10 text-5xl max-w-6xl font-bold text-white bg-cyan-400 bg-opacity-90 px-10 pb-5 rounded-md pt-5 ">
          {noticia.tituloDeNoticia}
          <p className=" text-lg text-white my-5 ">{noticia.resumenNoticia}</p>
        </div>
      </div>
    </>
  );
};
