import {
  agregarNoticia,
  eliminarEmpresa,
  modificarEmpresa,
  traerNoticiaId,
  traerNoticias,
} from "../../db/operaciones";
import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <>
      <div
        className="bg-white w-1/2 md:w-1/5 flex flex-col justify-center text-center border border-slate-300 hover:border-blue-600 p-5 rounded-xl m-5  cursor-pointer transition-all hover:scale-105"
        onClick={() => setOpen(true)}
      >
        <h1 className="text-blue-800 font-semibold text-2xl mb-4">
          {props.nombreEmpresa}
        </h1>
        <h2 className="text-gray-500 font-semibold">{props.denominacion}</h2>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 ">
          <div className="bg-white rounded shadow-lg p-8 m-4 max-w-lg max-h-full text-center md:overflow-hidden z-50">
            <h1 className=" text-blue-600 text-2xl font-semibold mb-8">
              Modificar {form.nombreEmpresa}
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

              <div className="my-5 flex flex-col md:flex-row">
                <input
                  required
                  type="text"
                  placeholder="Denominación"
                  name="denominacion"
                  value={form.denominacion}
                  onChange={handleChange}
                  className="p-2 text-start mx-2 border-b border-gray-600 hover:border-blue-600 transition-all focus:border-blue-600 outline-none "
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

              <div className="my-5 flex flex-col md:flex-row">
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

              <div className="my-5 flex flex-col md:flex-row">
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

              <div className="my-5 flex flex-col md:flex-row">
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

              <div className=" flex flex-wrap justify-center mt-8 mb-4 font-semibold">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-all mx-4 w-full md:w-1/4 my-2 md:my-0"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </button>

                <button
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition-all mx-4 w-full md:w-1/4 my-2 md:my-0"
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

              <div className="font-semibold  flex justify-center items-center my-2">
                <button
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-all mx-4 w-full md:w-10/12"
                  onClick={() => {
                    setOpen(false);
                    setNoticias(true);
                    traerNoticiaId(props.id).then((noticia) => {
                      setNoticiasId(noticia);
                    });
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
        <div className="fixed inset-0 flex items-center justify-center transition-all duration-150 font-semiboldold ">
          <div className="bg-white rounded shadow-lg p-8 m-4 max-w-lg max-h-full text-center md:overflow-hidden z-50">
            <h1 className=" text-red-600 text-2xl font-semibold mb-8">
              Listado de noticias de {props.nombreEmpresa}:
            </h1>
            <div>
              {noticiasId.map((noticia) => {
                return <h1 key={noticia.id}>{noticia.id}</h1>;
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
