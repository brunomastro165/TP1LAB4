import Container from "./components/LandingPage/Container";
import Selector from "./components/Selector/Selector";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Selector />
      <Routes>
        <Route path="/administrador" element={<Container />} />
        <Route path="/usuario" element={<Container />} />
      </Routes>
    </Router>
  );
}

export default App;
