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
import { v4 } from "uuid";
import { app, storage } from "../../credentials";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);

// Archivo es la imagen que pasamos
// Con id manejamos el archivo subido desde el frontend
export async function subirArchivo(archivo) {
  try {
    const id = v4().toString();
    const storageRef = ref(storage, id);
    await uploadBytes(storageRef, archivo);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    return "hubo un error";
  }
}
