import {
  agregarNoticia,
  eliminarEmpresa,
  modificarEmpresa,
  traerNoticiaId,
  traerNoticias,
} from "../../db/operaciones";
import React, { useState } from "react";
import NoticiaCard from "./Noticias/NoticiaCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [noticias, setNoticias] = useState(false);
  const [noticiasId, setNoticiasId] = useState([]);

  const [form, setForm] = useState({
    nombreEmpresa: props.nombreEmpresa,
    denominacion: props.denominacion,
    domicilio: props.domicilio,
    email: props.email,
    horarioAtencion: props.horarioAtencion,
    latitud: props.latitud,
    longitud: props.longitud,
    quienesSomos: props.quienesSomos,
    telefono: props.telefono,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    modificarEmpresa(
      props.id,
      form.nombreEmpresa,
      form.denominacion,
      form.domicilio,
      form.email,
      form.horarioAtencion,
      form.latitud,
      form.longitud,
      form.quienesSomos,
      form.telefono
    );

    setTimeout(() => {
      props.setUpdate(!props.update);
    }, 500);

    props.setModificado(true);

    setOpen(false);
  };

  //Con esta función manejo el enrutamiento hacia adminNoticias
  const navigate = useNavigate();

  function pushNoticias(id) {
    traerNoticiaId(id)
      .then((noticia) => {
        navigate("/adminNoticias", { state: { noticia } });
      })
      .catch((error) => {
        console.error("Error obteniendo la noticia: ", error);
      });
  }

  return (
    <>
      <li
        className="py-5 cursor-pointer px-4 md:px-12 hover:bg-slate-100 rounded-md"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0"></div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm md:text-xl font-medium text-blue-600 truncate ">
              {props.nombreEmpresa}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {props.email}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {props.denominacion}
          </div>
        </div>
      </li>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 w-full  ">
          <div className="bg-white rounded shadow-lg p-8 m-4 max-h-full text-center md:overflow-hidden z-50 w-full md:w-1/2 overflow-scroll">
            <h1 className=" text-blue-600 text-2xl font-semibold mb-8">
              Modificar {form.nombreEmpresa}
            </h1>
            <form
              className="w-full md:max-w-xl mx-auto text-start"
              onSubmit={handleSubmit}
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  name="nombreEmpresa"
                  id="nombreEmpresa"
                  placeholder=""
                  value={form.nombreEmpresa}
                  onChange={handleChange}
                />
                <label
                  htmlFor="nombreEmpresa"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre de la empresa
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    type="text"
                    id="domicilio"
                    name="domicilio"
                    value={form.domicilio}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="domicilio"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Domicilio
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    id="denominacion"
                    type="text"
                    name="denominacion"
                    value={form.denominacion}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="denominacion"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Denominación
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="horarioAtencion"
                    id="horarioAtencion"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.horarioAtencion}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="horarioAtencion"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Horario de atención
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="latitud"
                    id="latitud"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.latitud}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="latitud"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Latitud
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="longitud"
                    id="longitud"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.longitud}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="logitud"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Longitud
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="telefono"
                    id="telefono"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.telefono}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="telefono"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Número de teléfono (261-399-8137)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="quienesSomos"
                    id="quienesSomos"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.quienesSomos}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="quienesSomos"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Empresa (Ej. Google)
                  </label>
                </div>
              </div>

              <div className=" flex flex-wrap justify-center mt-8 mb-4 font-semibold">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-1/4 my-2 md:my-0"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition-all mx-4 w-full md:w-1/4 my-2 md:my-0"
                >
                  Guardar
                </button>
              </div>

              <div className="font-semibold  flex justify-center items-center ">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-10/12"
                  onClick={() => {
                    setOpen(false);
                    setDelete(true);
                  }}
                >
                  Eliminar empresa
                </button>
              </div>

              <div className="font-semibold  flex justify-center items-center my-2 text-center">
                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-all mx-4 w-full md:w-10/12"
                  onClick={() => {
                    setOpen(false);
                    setNoticias(true);
                    pushNoticias(props.id);
                  }}
                >
                  Administrar noticias
                </button>
              </div>
            </form>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {isDelete && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 font-semiboldold ">
          <div className="bg-white rounded shadow-lg p-8 m-4 max-w-lg max-h-full text-center md:overflow-hidden z-50">
            <h1 className=" text-red-600 text-2xl font-semibold mb-8">
              ¿Está seguro de querer eliminar {props.nombreEmpresa}?
            </h1>
            <div className="flex flex-wrap justify-center mt-8 mb-4">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-1/4 my-2"
                onClick={() => setDelete(false)}
              >
                Cancelar
              </button>

              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-1/4 my-2"
                onClick={() => {
                  eliminarEmpresa(props.id);
                  setTimeout(() => {
                    props.setUpdate(!props.update);
                    props.setEliminado(true);
                    setOpen(true);
                    setDelete(false);
                  }, 100);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {noticias && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 font-semiboldold w-full">
          <div className="bg-white rounded shadow-lg p-8 m-4 max-w-lg max-h-full text-center md:overflow-hidden z-50 w-full">
            <h1 className=" text-red-600 text-2xl font-semibold mb-8">
              Listado de noticias de {props.nombreEmpresa}:
            </h1>
            <div>
              {noticiasId.map((noticia) => {
                return <NoticiaCard key={noticia.id} />;
              })}
            </div>
            <div className="flex flex-wrap justify-center mt-8 mb-4">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition-all mx-4 w-full my-2"
                onClick={() => {
                  agregarNoticia(props.id, "nuevaNoticia");
                  setTimeout(() => {
                    props.setUpdate(!props.update);
                    setOpen(true);
                    setNoticias(false);
                  }, 100);
                }}
              >
                Agregar noticia
              </button>

              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full my-2"
                onClick={() => setNoticias(false)}
              >
                Volver
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
    </>
  );
};

export default Card;
