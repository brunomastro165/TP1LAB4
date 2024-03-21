import React from 'react'

export const FooterEmpresa = ({ domicilio, nombreEmpresa }) => {
    return (
      <footer className="bg-slate-200 rounded-t-xl p-6 text-center text-blue-400 mt-8">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">{nombreEmpresa}</h1>
          <p>{domicilio}</p>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} {nombreEmpresa}. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };
export default FooterEmpresa;
