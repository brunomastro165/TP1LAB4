import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NoticiaCard from "./NoticiaCard";
import { agregarNoticia, traerNoticiaId } from "../../../db/operaciones";
import { useNavigate } from "react-router-dom";
import { subirArchivo } from "../../../db/subirArchivos";
import { v4 } from "uuid";
import Tiny from "./TextEditor/Tiny";
import { FaArrowCircleRight } from "react-icons/fa";

const NoticiaPage = () => {
  const location = useLocation();
  const [noticia, setNoticia] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [textEditor, setTextEditor] = useState(false);
  const [HTMLText, setHTMLText] = useState("No tiene HTML");

  //Listo que capo que soy
  useEffect(() => {
    const { noticia, id } = location.state;
    setNoticia(noticia);
    setIdEmpresa(id);
  }, [location.state]); // Se ejecuta cada vez que `location.state` cambia

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setModificado(false);
  //       setEliminado(false);
  //     }, 4000);
  //   }, [modificado, eliminado]);

  const [form, setForm] = useState({
    tituloDeNoticia: "",
    resumenNoticia: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await agregarNoticia(
      form.tituloDeNoticia,
      form.resumenNoticia,
      form.imagenNoticia,
      HTMLText,
      form.publicada,
      form.fecha,
      idEmpresa
    );

    setForm({
      tituloDeNoticia: "",
      resumenDeNoticia: "",
      imagenNoticia: "",
      contenidoHTML: "",
      publicada: "",
      fecha: "",
    });

    // setTimeout(() => {
    //   setUpdate(!update);
    // }, 500);

    setOpen(false);

    pushNoticias(idEmpresa);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const url = await subirArchivo(e.target.files[0]);

    setForm((prevForm) => ({
      ...prevForm,
      imagenNoticia: url,
    }));
  };

  const navigate = useNavigate();

  function pushNoticias(id) {
    traerNoticiaId(id)
      .then((noticia) => {
        navigate("/adminNoticias", { state: { noticia, id } });
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
            key={i}
            id={n.id}
            tituloDeNoticia={n.tituloDeNoticia}
            resumenNoticia={n.resumenNoticia}
            imagenNoticia={n.imagenNoticia}
            contenidoHTML={n.contenidoHTML}
            publicada={n.publicada}
            fecha={n.fecha}
            idEmpresa={idEmpresa}
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
              Agregar Noticia
            </h1>

            <div
              onSubmit={handleSubmit}
              className="w-full md:max-w-xl mx-auto text-start "
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  name="tituloDeNoticia"
                  id="tituloDeNoticia"
                  placeholder=""
                  value={form.tituloDeNoticia}
                  onChange={handleChange}
                  maxLength={128}
                />
                <label
                  htmlFor="tituloDeNoticia"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Título de la noticia
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    type="text"
                    id="resumenNoticia"
                    name="resumenNoticia"
                    value={form.resumenNoticia}
                    onChange={handleChange}
                    maxLength={1024}
                  />
                  <label
                    htmlFor="resumenNoticia"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Resumen de la noticia
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="publicada"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

              <div className="grid md:grid-cols-2 md:gap-6 w-full">
                <div className="flex flex-col items-center md:items-start relative z-0 w-full mb-5 group">
                  <h1 className="text-gray-500 text-sm">Contenido HTML:</h1>
                  <button
                    className="flex px-4 py-2 text-white font-semibold bg-blue-600 rounded hover:bg-blue-700 transition-all self-center items-center w-1/2 md:w-full mt-2 
                    justify-between  group"
                    onClick={() => setTextEditor(true)}
                  >
                    Agregar HTML
                    <FaArrowCircleRight className="group-hover:translate-x-2 group-hover:scale-110  transition-all ease-in-out -translate-x-2" />
                  </button>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900"
                      htmlFor="imagenNoticia"
                    >
                      Subir imagen
                    </label>
                    <input
                      type="file"
                      aria-describedby="imagenNoticia"
                      id="imagenNoticia"
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2 "
                      name="imagenNoticia"
                      onChange={handleUpload}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="date"
                    name="fecha"
                    id="fecha"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.fecha}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="fecha"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  onClick={handleSubmit}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {textEditor && <Tiny setHTML={setHTMLText} setOpen={setTextEditor} />}
    </div>
  );
};

export default NoticiaPage;
