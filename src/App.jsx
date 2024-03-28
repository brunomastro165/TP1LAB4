import { useState, useEffect } from "react";
import Container from "./components/AdminPage/Empresas/Container";
import NoticiaPage from "./components/AdminPage/Noticias/NoticiaPage";
import Selector from "./components/Selector/Selector";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SubirImagen from "./components/UploadFileTest/SubirImagen";
import Empresa from "./components/EmpresaPage/Empresa";
import { Empresas } from './components/Empresas/Empresas';
import Noticiahtml from "./components/EmpresaPage/Noticiahtml";
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [showSelector, setShowSelector] = useState(true);
  const [showSelector2, setShowSelector2] = useState(true);

  useEffect(() => {
    setShowSelector2(!location.pathname.startsWith("/empresa"));
  }, [location]);

  useEffect(() => {
    setShowSelector(location.pathname !== "/");
  }, [location]);

  return (
    <>
      {/* {showSelector && showSelector2 && <Selector />} */}
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="usuario" element={<Container />} />
        <Route path="AdminNoticias" element={<NoticiaPage />} />
        <Route path="subirImagen" element={<SubirImagen />} />
        <Route path="/empresa/:id" element={<Empresa />} />
        <Route path="/Noticia/:id" element={<Noticiahtml />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
    </>
  );
}

export default App;
