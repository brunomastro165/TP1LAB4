import React from "react";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
const Selector = () => {
  return (
    <div className="flex flex-col text-blue-600  bg-white shadow-lg items-center align-middle h-screen fixed w-1/6">
      <Link to="/administrador" className="w-10/12 rounded-lg m-2">
        <div
          className="p-2  border-white hover:bg-blue-100 transition-all focus:border-blue-600
        font-semibold text-xl w-full rounded-md flex flex-row items-center justify-start "
        >
          <VscHome className="mr-8 text-2xl" />
          Empresas
        </div>
      </Link>
      <Link to="/usuario" className="w-10/12 rounded-lg m-2">
        <div
          className="p-2  border-white hover:bg-blue-100 transition-all focus:border-blue-600
        font-semibold text-xl w-full rounded-md flex flex-row items-center justify-start "
        >
          <VscHome className="mr-8 text-2xl" />
          Noticias
        </div>
      </Link>
    </div>
  );
};

export default Selector;
