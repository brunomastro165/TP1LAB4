import React from "react";
import { Link } from "react-router-dom";

const Selector = () => {
  return (
    <div className="flex md:flex-row justify-around bg-white shadow-lg p-2 items-center align-middle w-full">
      <Link to="/administrador">
        <div
          className="p-5 border-b-2 border-white hover:border-blue-600 transition-all focus:border-blue-600
        font-semibold text-xl"
        >
          Admin
        </div>
      </Link>
      <Link to="/usuario">
        <div
          className="p-5 border-b-2 border-white hover:border-blue-600 transition-all focus:border-blue-600
        font-semibold text-xl"
        >
          Usuario
        </div>
      </Link>
    </div>
  );
};

export default Selector;
