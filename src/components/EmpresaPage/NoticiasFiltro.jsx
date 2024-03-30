import React, { useState } from "react";
import Carousel from "./Carousel";

const NoticiasFiltro = ({ noticias, id }) => {
  return (
    <div className="h-full">
      <div className="flex my-5  border-b py-3">
        <a
          href="/"
          className="text-2xl font-bold text-blue-600 bg-gray-200 rounded-sm p-3 mx-5 cursor-pointer hover:bg-blue-600 hover:text-gray-200"
        >
          INICIO
        </a>
        <a
          href="/empresas"
          className="text-2xl font-bold text-blue-600 bg-gray-200 rounded-sm p-3 mx-5 cursor-pointer hover:bg-blue-600 hover:text-gray-200"
        >
          EMPRESAS
        </a>

        <div className="flex justify-end w-full items-center mx-6">
          <img
            className=" h-max w-8 mx-5"
            src="https://www.freeiconspng.com/uploads/search-icon-png-21.png"
            alt=""
          />
          <a
            href={`/buscarNoticias/${id}`}
            className="w-1/6 h-16 px-3 py-2 text-3xl placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border-solid border-2 border-indigo-600 text-center hover:bg-blue-600 hover:text-gray-200"
          >
            Buscar noticias
          </a>
        </div>
      </div>
      <div>
        <Carousel slides={noticias} />
      </div>
    </div>
  );
};

export default NoticiasFiltro;
