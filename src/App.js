import HamburgerMenu1 from "./Components/HamburguerMenu";
import Nav from "./Components/Nav";
import Rapido from "./Page/Rapido";
import Mensalistas from "./Page/Mensalistas";
import Historico from "./Page/Historico";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <HamburgerMenu1/>
    <Routes>
      <Route path="/" element={<Rapido/>} />
      <Route path="Mensalistas" element={<Mensalistas/>} />
      <Route path="Historico" element={<Historico/>} />
    </Routes>  
      </BrowserRouter>
  );
}

export default App;
