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

// CREATE
export const agregarEmpresa = async (
  nombreEmpresaN,
  denominacionN,
  domicilioN,
  emailN,
  horarioAtencionN,
  latitudN,
  quienesSomosN,
  telefonoN
) => {
  try {
    await addDoc(collection(db, "Empresa"), {
      nombreEmpresa: nombreEmpresaN,
      denominacion: denominacionN,
      domicilio: domicilioN,
      email: emailN,
      horarioAtencion: horarioAtencionN,
      latitud: latitudN,
      quienesSomos: quienesSomosN,
      telefono: telefonoN,
    });
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};

export const agregarNoticia = async (nombreNuevo, precioNuevo, stockNuevo) => {
  try {
    await addDoc(collection(db, "Noticia"), {
      nombre: nombreNuevo,
      precio: precioNuevo,
      stock: stockNuevo,
      actualizaciones:
        new Date().toLocaleDateString() +
        " | " +
        new Date().toLocaleTimeString(),
    });
  } catch (error) {
    console.error("Error al leer datos: ", error);
  }
};

//Update
export const updateData = async (id, nombreNuevo, precioNuevo, stockNuevo) => {
  try {
    const q = query(collection(db, "productos"), where("nombre", "==", id));
    const querySnapshot = await getDocs(q);

    let docId;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docId = doc.id;
    });

    const pedidoRef = doc(db, "productos", docId);

    await updateDoc(pedidoRef, {
      nombre: nombreNuevo,
      precio: precioNuevo,
      stock: stockNuevo,
      actualizaciones:
        new Date().toLocaleDateString() +
        " | " +
        new Date().toLocaleTimeString(),
    });

    console.log("Enviado con éxito");
  } catch (error) {
    console.error(error);
  }
};

//Delete

export const deleteData = async (id) => {
  try {
    const q = query(collection(db, "productos"), where("nombre", "==", id));
    const querySnapshot = await getDocs(q);

    let docId;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docId = doc.id;
    });

    const pedidoRef = doc(db, "productos", docId);

    await deleteDoc(pedidoRef);

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
