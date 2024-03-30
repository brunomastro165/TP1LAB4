import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarEmpresa from "./NavbarEmpresa/NavbarEmpresa";
import FooterEmpresa from "./FooterEmpresa/FooterEmpresa";
import { traerEmpresas, traerNoticiaId } from "../../db/operaciones";

export const Buscador = () => {
  const [empresas, setEmpresas] = useState([]);
  const [idC, setId] = useState([]);
  const { id } = useParams();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setId(id);
    traerNoticiaId(id).then((noticias) => {
      setNoticias(noticias);
    });
    traerEmpresas().then((empresa) => {
      setEmpresas(empresa);
    });
  }, []);
  const [busqueda, setBusqueda] = useState("");

  const noticiasFiltradas = noticias.filter((noticia) =>
    noticia.tituloDeNoticia.toLowerCase().includes(busqueda.toLowerCase())
  );
  console.log(noticiasFiltradas);
  return (
    <>
      {empresas.map((empresa, index) => {
        return (
          <React.Fragment key={index}>
            {empresa.id === idC ? (
              <>
                <NavbarEmpresa
                  telefono={empresa.telefono}
                  nombreEmpresa={empresa.denominacion}
                  horarios={empresa.horarioAtencion}
                />
                <div className=" flex justify-end my-5 border-solid border-2 border-y-black py-3 w-full">
                  <input
                    type="text"
                    placeholder="Buscar noticias..."
                    className="w-64 h-16 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border-solid border-2 border-indigo-600"
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
                <div className="flex justify-center w-full relative my-6">
                  <div className=" w-3/4">
                    {noticiasFiltradas
                      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                      .slice(0, 20)
                      .map((noticia, i) => {
                        return (
                          <div
                            className=" relative flex items-center border-2 border-blue-400 p-1 cursor-pointer my-2"
                            key={i}
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = `/Noticia/${noticia.id}`;
                            }}
                          >
                            <img
                              className=" w-40"
                              src={noticia.imagenNoticia}
                              alt=""
                            />
                            <div className=" absolute right-0 mx-8 flex">
                              <h2>{noticia.tituloDeNoticia} - </h2>
                              <h2> {noticia.fecha}</h2>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <FooterEmpresa
                  nombreEmpresa={empresa.nombreEmpresa}
                  domicilio={empresa.domicilio}
                />
              </>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Buscador;
