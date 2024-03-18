import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NoticiaCard from "./NoticiaCard";
import { agregarNoticia, traerNoticiaId } from "../../../db/operaciones";
import { useNavigate } from "react-router-dom";

const NoticiaPage = () => {
  const location = useLocation();
  const [update, setUpdate] = useState(false);
  const [noticias, setNoticias] = useState(location.state);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setNoticias(location.state);
  }, [update, location.state]);

  let { noticia } = noticias;

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setModificado(false);
  //       setEliminado(false);
  //     }, 4000);
  //   }, [modificado, eliminado]);

  const [form, setForm] = useState({
    tituloDeNoticia: "",
    resumenDeNoticia: "",
    imagenNoticia: "",
    contenidoHTML: "",
    publicada: "",
    fecha: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarNoticia(
      form.tituloDeNoticia,
      form.resumenDeNoticia,
      form.imagenNoticia,
      form.contenidoHTML,
      form.publicada,
      form.fecha
    );

    setForm({
      tituloDeNoticia: "",
      resumenDeNoticia: "",
      imagenNoticia: "",
      contenidoHTML: "",
      publicada: "",
      fecha: "",
    });

    setTimeout(() => {
      setUpdate(!update);
    }, 500);

    setOpen(false);

    pushNoticias(10);
  };

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
    <div className="pt-24 flex flex-wrap justify-center items-center">
      {noticia.map((n, i) => {
        return (
          <NoticiaCard
            key={n.id}
            tituloDeNoticia={n.tituloDeNoticia}
            resumenDeNoticia={n.resumenDeNoticia}
            imagenNoticia={n.imagenNoticia}
            contenidoHTML={n.contenidoHTML}
            publicada={n.publicada}
            fecha={n.fecha}
          />
        );
      })}

      <div className="fixed bottom-0 right-5  flex items-end justify-center mb-4">
        <button
          onClick={() => setOpen(true)}
          className="
          flex flex-row justify-center items-center text-center
      mt-5
      p-5 rounded-xl bg-green-400 text-white transition-all hover:scale-105 md:text-xl font-semibold hover:shadow-xl hover:shadow-green-400"
        >
          <h1 className="flex items-center justify-center text-center">
            {" "}
            <h2 className="hidden md:block">Agregar Noticia </h2>
            <span className="flex items-center justify-center text-5xl pb-4 font-extrabold bg-white rounded-md self-center text-green-400 md:ml-5 p-2">
              +
            </span>
          </h1>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 w-full ">
          <div className="bg-white rounded shadow-lg p-8 m-4 w-full md:w-1/2 max-h-full text-center md:overflow-hidden z-50">
            <h1 className=" text-blue-600 text-2xl font-semibold mb-8">
              Agregar Empresa
            </h1>

            <form
              onSubmit={handleSubmit}
              className="w-full md:max-w-xl mx-auto text-start "
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  name="tituloDeNoticia"
                  id="tituloDeNoticia"
                  placeholder=""
                  value={form.tituloDeNoticia}
                  onChange={handleChange}
                />
                <label
                  htmlFor="tituloDeNoticia"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Título de la noticia
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    type="text"
                    id="resumenDeNoticia"
                    name="resumenDeNoticia"
                    value={form.resumenDeNoticia}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="resumenDeNoticia"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Resumen de la noticia
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="imagenNoticia"
                    >
                      Subir imagen
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="imagenNoticia"
                      id="imagenNoticia"
                      type="file"
                      name="imagenNoticia"
                      value={form.imagenNoticia}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="contenidoHTML"
                    id="contenidoHTML"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.contenidoHTML}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="contenidoHTML"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contenido HTML
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="publicada"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Publicada
                  </label>
                  <div className="flex text-center items-center mt-4">
                    <input
                      className="mx-4 "
                      type="radio"
                      id="opcion1"
                      name="publicada"
                      value="t"
                    />
                    <label htmlFor="opcion1">Si</label>
                    <input
                      className="mx-4"
                      type="radio"
                      id="opcion2"
                      name="publicada"
                      value="f"
                    />
                    <label htmlFor="opcion2">No</label>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="date"
                    name="fecha"
                    id="fecha"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.fecha}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="fecha"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Fecha
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap justify-center mt-8 mb-4">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-1/4 "
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </button>

                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-all mx-4 w-full md:w-1/4"
                  type="submit"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default NoticiaPage;
