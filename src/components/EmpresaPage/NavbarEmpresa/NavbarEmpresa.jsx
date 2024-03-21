import React from 'react'

export const NavbarEmpresa = ({ telefono, nombreEmpresa, horarios }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-200 p-12 shadow-lg rounded-b-3xl" >
      <div className="flex items-center flex-shrink-0  mr-6 text-blue-600">
        <span className="font-semibold text-4xl tracking-tight">{nombreEmpresa}</span>
      </div>

      <div className="">
        <div className="lg:flex-grow"></div>
        <div className=" lg:items-end">
        <h1  className="block mt-4 lg:mt-0 text-black font-semibold mr-4 text-xl float-right">
            TELEFONO
          </h1><br />
          <h1  className="block mt-4  lg:mt-0 text-blue-400 mr-4 text-4xl float-right">
            {telefono}
          </h1><br />
          <h1 className="block mt-4  lg:mt-0 text-blue-400 mr-4 text-lg float-right">
            {horarios}
          </h1>
          <h1 className="block mt-4  lg:mt-0 text-black mr-1 text-lg float-right">
            HORARIOS:
          </h1>
          
        </div>
      </div>
    </nav>

  );
};

export default NavbarEmpresa;