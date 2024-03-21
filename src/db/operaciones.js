import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
} from "firebase/firestore";

import { where } from "firebase/firestore";

import { app } from "../../credentials";

import { v4 } from "uuid";

const db = getFirestore(app);

//READ
export const traerEmpresas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Empresa"));
    const productos = querySnapshot.docs.map((doc) => doc.data());
    return productos;
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};

export const traerNoticias = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Noticia"));
    const productos = querySnapshot.docs.map((doc) => doc.data());
    return productos;
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};

export const traerNoticiaId = async (id) => {
  try {
    const q = query(collection(db, "Noticia"), where("idEmpresa", "==", id));
    const querySnapshot = await getDocs(q);
    const noticias = querySnapshot.docs.map((doc) => doc.data());
    return noticias;
  } catch (error) {
    console.error(error);
  }
};

// CREATE
export const agregarEmpresa = async (
  nombreEmpresaN,
  denominacionN,
  domicilioN,
  emailN,
  horarioAtencionN,
  latitudN,
  longitudN,
  quienesSomosN,
  telefonoN
) => {
  try {
    const id = v4(); //v4 es un algoritmo que genera ids aleatorias
    await addDoc(collection(db, "Empresa"), {
      id: id,
      nombreEmpresa: nombreEmpresaN,
      denominacion: denominacionN,
      domicilio: domicilioN,
      email: emailN,
      horarioAtencion: horarioAtencionN,
      latitud: latitudN,
      quienesSomos: quienesSomosN,
      telefono: telefonoN,
      longitud: longitudN,
    });
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};

export const agregarNoticia = async (
  tituloDeNoticia,
  resumenNoticia,
  imagenNoticia,
  contenidoHTML,
  publicada,
  fecha,
  idEmpresa
) => {
  try {
    const id = v4();
    await addDoc(collection(db, "Noticia"), {
      id: id,
      tituloDeNoticia: tituloDeNoticia,
      resumenNoticia: resumenNoticia,
      imagenNoticia: imagenNoticia,
      contenidoHTML: contenidoHTML,
      publicada: publicada,
      fecha: fecha,
      idEmpresa: idEmpresa,
    });

    console.log("Se envío todo bien");
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};

//Update
export const modificarEmpresa = async (
  id,
  nombreEmpresaN,
  denominacionN,
  domicilioN,
  emailN,
  horarioAtencionN,
  latitudN,
  longitudN,
  quienesSomosN,
  telefonoN
) => {
  try {
    const q = query(collection(db, "Empresa"), where("id", "==", id));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
    let docId;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });

    const idRef = doc(db, "Empresa", docId);

    await updateDoc(idRef, {
      nombreEmpresa: nombreEmpresaN,
      denominacion: denominacionN,
      domicilio: domicilioN,
      email: emailN,
      horarioAtencion: horarioAtencionN,
      latitud: latitudN,
      quienesSomos: quienesSomosN,
      telefono: telefonoN,
      longitud: longitudN,
    });

    console.log("Enviado con éxito");
  } catch (error) {
    console.error(error);
  }
};

//Delete

export const eliminarEmpresa = async (id) => {
  try {
    const q = query(collection(db, "Empresa"), where("id", "==", id));
    const querySnapshot = await getDocs(q);

    let docId;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });

    const idRef = doc(db, "Empresa", docId);

    await deleteDoc(idRef);

    console.log("Eliminado con éxito");
  } catch (error) {
    console.error(error);
  }
};

//Traer las compras y exportarlas

export const traerCompras = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "compras"));
    const compras = querySnapshot.docs.map((doc) => doc.data());
    return compras;
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};
