/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  eliminarNoticia,
  modificarNoticia,
  traerNoticiaId,
} from "../../../db/operaciones";
import { FaArrowCircleRight } from "react-icons/fa";
import { subirArchivo } from "../../../db/subirArchivos";
import { agregarNoticia } from "../../../db/operaciones";
import { useLocation } from "react-router-dom";
import Tiny from "./TextEditor/Tiny";

const NoticiaCard = (props) => {
  const location = useLocation();
  const [noticia, setNoticia] = useState([]);
  const [idEmpresa, setIdEmpresa] = useState(props.idEmpresa);
  const [isOpen, setOpen] = useState(false);
  const [textEditor, setTextEditor] = useState(false);
  const [HTMLText, setHTMLText] = useState(props.contenidoHTML);

  const [form, setForm] = useState({
    tituloDeNoticia: props.tituloDeNoticia,
    resumenNoticia: props.resumenNoticia,
    imagenNoticia: props.imagenNoticia,
    contenidoHTML: props.contenidoHTML,
    publicada: props.publicada,
    fecha: props.fecha,
  });

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await modificarNoticia(
      form.tituloDeNoticia,
      form.resumenNoticia,
      form.imagenNoticia,
      HTMLText,
      form.publicada,
      form.fecha,
      idEmpresa,
      props.id
    );

    pushNoticias(idEmpresa);
    setOpen(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const url = await subirArchivo(e.target.files[0]);

    setForm((prevForm) => ({
      ...prevForm,
      imagenNoticia: url,
    }));
  };

  const handleEliminate = async (e) => {
    await eliminarNoticia(props.id);
    pushNoticias(idEmpresa);
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center m-10 md:m-5 overflow-hidden">
        <div className=" bg-white border border-gray-200 rounded-lg shadow flex flex-col md:flex-row items-center">
          <a>
            <div className="w-72 h-72 overflow-hidden rounded-xl m-4">
              <img
                className="min-w-full min-h-full object-cover rounded-l-md"
                src={props.imagenNoticia}
                alt="imagenNoticia"
              />
            </div>
          </a>
          <div className="p-5 overflow-hidden">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {props.tituloDeNoticia}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700  w-48 h-24 overflow-hidden">
              {props.resumenNoticia}
            </p>
            <p className="mb-3 text-blue-600 text-xl font-semibold ">
              {props.fecha}
            </p>
            <a
              className="inline-flex items-center px-3 p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Administrar noticia
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 w-full ">
          <div className="bg-white rounded shadow-lg p-8 m-4 w-full md:w-1/2 max-h-full text-center md:overflow-hidden z-50">
            <h1 className=" text-blue-600 text-2xl font-semibold mb-8">
              Modificar {props.tituloDeNoticia}
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
                  required
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
                      onChange={handleChange}
                      className="mx-4 "
                      type="radio"
                      id="opcion1"
                      name="publicada"
                      value="t"
                    />
                    <label htmlFor="opcion1">Si</label>
                    <input
                      onChange={handleChange}
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

              <div className="w-full flex items-center justify-center">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-full"
                  type="submit"
                  onClick={handleEliminate}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {textEditor && <Tiny setHTML={setHTMLText} setOpen={setTextEditor} />}
    </>
  );
};

export default NoticiaCard;
