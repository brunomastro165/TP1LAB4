import Container from "./components/AdminPage/Container";
import NoticiaPage from "./components/AdminPage/Noticias/NoticiaPage";
import Selector from "./components/Selector/Selector";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubirImagen from "./components/UploadFileTest/SubirImagen";

function App() {
  return (
    <Router>
      <Selector />
      <Routes>
        <Route path="/administrador" element={<Container />} />
        <Route path="/usuario" element={<Container />} />
        <Route path="/AdminNoticias" element={<NoticiaPage />} />
        <Route path="/subirImagen" element={<SubirImagen />} />
      </Routes>
    </Router>
  );
}

export default App;
