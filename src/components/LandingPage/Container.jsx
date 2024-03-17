import React, { useState } from "react";
import { useEffect } from "react";
import { traerEmpresas, agregarEmpresa } from "../../db/operaciones";
import Card from "./Card";

const Container = () => {
  const [empresas, setEmpresas] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    traerEmpresas().then((empresa) => {
      setEmpresas(empresa);
    });
  }, [update]);

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

    setUpdate(!update);

    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
    }, 4000);
  };

  console.log(empresas);
  return (
    <div className="w-full bg-slate-200">
      <div
        className={`flex flex-row fixed bg-white p-5 w-44 rounded-md text-white font-semibold text-center m-2 transition-all duration-75 shadow-md ${
          enviado ? "translate-x-0 " : "-translate-x-48 "
        }`}
      >
        <div className="h-14 p-1 rounded-md bg-green-400" />
        <h1 className="text-green-400 font-semibold text-xl">
          Se subió la Empresa
        </h1>
      </div>

      <h1 className="text-center text-2xl font-semibold text-blue-600 mt-4">
        Listado de empresas
      </h1>
      <div className="flex flex-wrap w-full justify-center items-center pt-24  h-auto pb-24 ">
        {empresas.map((empresa) => {
          return (
            <>
              <Card
                key={empresa.id}
                nombre={empresa.nombreEmpresa}
                denominacion={empresa.denominacion}
              />
            </>
          );
        })}
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
            Agregar Empresa{" "}
            <span className="flex items-center justify-center text-5xl pb-4 font-extrabold bg-white rounded-md self-center text-green-400 ml-5 p-2">
              +
            </span>
          </h1>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 ">
          <div className="bg-white rounded shadow-lg p-8 m-4 max-w-lg max-h-full text-center md:overflow-hidden z-50">
            <h1 className=" text-blue-600 text-2xl font-semibold mb-8">
              Agregar Empresa
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none w-full m-auto"
                  type="text"
                  name="nombreEmpresa"
                  placeholder="Nombre de la empresa"
                  value={form.nombreEmpresa}
                  onChange={handleChange}
                />
              </div>

              <div className="my-5">
                <input
                  required
                  type="text"
                  placeholder="Denominación"
                  name="denominacion"
                  value={form.denominacion}
                  onChange={handleChange}
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                />{" "}
                <input
                  required
                  type="text"
                  placeholder="Domicilio"
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                  name="domicilio"
                  value={form.domicilio}
                  onChange={handleChange}
                />
              </div>

              <div className="my-5">
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                />{" "}
                <input
                  required
                  name="horarioAtencion"
                  value={form.horarioAtencion}
                  onChange={handleChange}
                  type="text"
                  placeholder="Horario atención"
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                />
              </div>

              <div className="my-5">
                <input
                  required
                  name="latitud"
                  value={form.latitud}
                  onChange={handleChange}
                  type="text"
                  placeholder="Latitud"
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                />
                <input
                  required
                  name="longitud"
                  value={form.longitud}
                  onChange={handleChange}
                  type="text"
                  placeholder="Longitud"
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                />
              </div>

              <div className="my-5">
                <input
                  required
                  name="quienesSomos"
                  type="text"
                  placeholder="Quiénes somos"
                  value={form.quienesSomos}
                  onChange={handleChange}
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                />{" "}
                <input
                  required
                  name="telefono"
                  type="text"
                  placeholder="Telefono"
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none"
                  value={form.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-wrap justify-center mt-8 mb-4">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-1/4 "
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </button>

                <button
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition-all mx-4 w-full md:w-1/4"
                  type="submit"
                  onClick={() => {
                    setTimeout(() => {
                      setOpen(false);
                    }, 100);
                  }}
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
