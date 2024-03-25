import React, { useState } from "react";
import { useEffect } from "react";
import { traerEmpresas, agregarEmpresa } from "../../../db/operaciones";
import Card from "./Card";
import { Link } from "react-router-dom";

const Container = () => {
  const [empresas, setEmpresas] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [modificado, setModificado] = useState(false);
  const [eliminado, setEliminado] = useState(false);

  useEffect(() => {
    traerEmpresas().then((empresa) => {
      setEmpresas(empresa);
    });
  }, [update]);

  useEffect(() => {
    setTimeout(() => {
      setModificado(false);
      setEliminado(false);
    }, 4000);
  }, [modificado, eliminado]);

  const [form, setForm] = useState({
    nombreEmpresa: "",
    denominacion: "",
    domicilio: "",
    email: "",
    horarioAtencion: "",
    latitud: "",
    longitud: "",
    quienesSomos: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEmpresa(
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

    setForm({
      nombreEmpresa: "",
      denominacion: "",
      domicilio: "",
      email: "",
      horarioAtencion: "",
      latitud: "",
      longitud: "",
      quienesSomos: "",
      telefono: "",
    });

    setTimeout(() => {
      setUpdate(!update);
    }, 500);

    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
    }, 4000);

    setOpen(false);
  };

  return (
    <div className="w-full ">
      <div
        className={`flex flex-row fixed bg-white p-5 w-60 rounded-md text-white font-semibold text-center m-2 transition-all duration-75 shadow-md ${
          enviado ? "translate-x-0 " : "-translate-x-72 "
        }`}
      >
        <div className="h-14 p-1 rounded-md bg-green-400" />
        <h1 className="text-green-400 font-semibold text-xl">
          Se subió una Empresa
        </h1>
      </div>

      <div
        className={`flex flex-row fixed bg-white p-5 w-60 rounded-md text-white font-semibold text-center m-2 transition-all duration-75 shadow-md ${
          modificado ? "translate-x-0 " : "-translate-x-72 "
        }`}
      >
        <div className="h-14 p-1 rounded-md bg-yellow-400" />
        <h1 className="text-yellow-400 font-semibold text-xl">
          Se modificó una empresa
        </h1>
      </div>

      <div
        className={`flex flex-row fixed bg-white p-5 w-60 rounded-md text-white font-semibold text-center m-2 transition-all duration-75 shadow-md ${
          eliminado ? "translate-x-0 " : "-translate-x-72 "
        }`}
      >
        <div className="h-14 p-1 rounded-md bg-red-500" />
        <h1 className="text-red-500 font-semibold text-xl">
          Se eliminó una empresa
        </h1>
      </div>

      <div className="mx-8 flex flex-col items-center justify-center">
        <div className="w-full md:w-full lg:w-1/2 p-4  border border-gray-200 rounded-lg mt-4 mb-4">
          <div className="flex items-center justify-center mb-4 ">
            <h5 className=" font-bold leading-none text-blue-600 text-center text-2xl">
              Listado de empresas
            </h5>
          </div>

          <div className="flow-root w-full">
            <ul role="list" className="divide-y divide-gray-200  ">
              {empresas.map((empresa) => {
                return (
                  <>
                    <Card
                      key={empresa.id}
                      id={empresa.id}
                      nombreEmpresa={empresa.nombreEmpresa}
                      denominacion={empresa.denominacion}
                      domicilio={empresa.domicilio}
                      latitud={empresa.latitud}
                      longitud={empresa.longitud}
                      email={empresa.email}
                      horarioAtencion={empresa.horarioAtencion}
                      quienesSomos={empresa.quienesSomos}
                      telefono={empresa.telefono}
                      setUpdate={setUpdate}
                      update={update}
                      setModificado={setModificado}
                      modificado={modificado}
                      setEliminado={setEliminado}
                      eliminado={eliminado}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
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
            <h2 className="hidden md:block">Agregar Empresa </h2>
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  name="nombreEmpresa"
                  id="nombreEmpresa"
                  placeholder=""
                  value={form.nombreEmpresa}
                  onChange={handleChange}
                  maxLength={50}
                />
                <label
                  htmlFor="nombreEmpresa"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre de la empresa
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    type="text"
                    id="domicilio"
                    name="domicilio"
                    value={form.domicilio}
                    onChange={handleChange}
                    maxLength={256}
                  />
                  <label
                    htmlFor="domicilio"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Domicilio
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    id="denominacion"
                    type="text"
                    name="denominacion"
                    value={form.denominacion}
                    maxLength={128}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="denominacion"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.email}
                    onChange={handleChange}
                    maxLength={75}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="horarioAtencion"
                    id="horarioAtencion"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.horarioAtencion}
                    onChange={handleChange}
                    maxLength={256}
                  />
                  <label
                    htmlFor="horarioAtencion"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.latitud}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="latitud"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Latitud
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="longitud"
                    id="longitud"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.longitud}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="longitud"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    maxLength={50}
                  />
                  <label
                    htmlFor="telefono"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Número de teléfono (261-399-8137)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="quienesSomos"
                    id="quienesSomos"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={form.quienesSomos}
                    onChange={handleChange}
                    maxLength={1024}
                  />
                  <label
                    htmlFor="quienesSomos"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Empresa (Ej. Google)
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

export default Container;
