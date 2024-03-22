import React from "react";

const NoticiaCard = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center m-5">
        <div className=" bg-white border border-gray-200 rounded-lg shadow flex items-center">
          <a href="#">
            <div className="w-72 h-72 overflow-hidden rounded-xl m-4">
              <img
                className="min-w-full min-h-full object-cover rounded-l-md"
                src={props.imagenNoticia}
                alt="imagenNoticia"
              />
            </div>
          </a>
          <div className="p-5 overflow-hidden">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {props.tituloDeNoticia}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700  w-48 h-24 overflow-hidden">
              {props.resumenNoticia}
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              (Texto resumido)
            </p>
            <a className="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 ">
              Administrar noticia
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticiaCard;
