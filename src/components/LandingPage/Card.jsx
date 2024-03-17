import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white w-1/2 md:w-1/5 flex flex-col justify-center text-center shadow-lg p-5 rounded-xl m-5 hover:shadow-2xl cursor-pointer transition-all hover:scale-105">
      <h1 className="text-blue-800 font-semibold text-2xl mb-4">
        {props.nombre}
      </h1>
      <h2 className="text-gray-500 font-semibold">{props.denominacion}</h2>
    </div>
  );
};

export default Card;
