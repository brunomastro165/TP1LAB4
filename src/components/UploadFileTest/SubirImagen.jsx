import React from "react";
import { subirArchivo } from "../../db/subirArchivos";

const SubirImagen = () => {
  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => subirArchivo(e.target.files[0], "5")}
      />
    </div>
  );
};

export default SubirImagen;
