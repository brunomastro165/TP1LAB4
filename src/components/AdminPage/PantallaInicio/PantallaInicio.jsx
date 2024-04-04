import React from "react";
import { Link } from "react-router-dom";

const PantallaInicio = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col md:flex-row justify-around items-center">
        <Link
          to={"/admin"}
          className=" p-12 border text-md md:text-xl lg:text-2xl w-96 text-center rounded-md shadow-md font-semibold hover:text-blue-600 hover:border-blue-600 transition-all duration-200 hover:scale-110 hover:shadow-blue-600 hover:shadow-2xl"
        >
          Administrador
        </Link>
        <Link
          to={"/empresas"}
          className=" p-12 border text-md md:text-xl lg:text-2xl w-96 text-center rounded-md shadow-md font-semibold hover:text-blue-600 hover:border-blue-600 transition-all duration-200 hover:scale-110 hover:shadow-blue-600 hover:shadow-2xl"
        >
          Página
        </Link>
      </div>
    </>
  );
};

export default PantallaInicio;
