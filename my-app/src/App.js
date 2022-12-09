import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Environnement from "./Pages/Environnement";
import Culture from "./Pages/Culture";
import DecouvrirPrivas from "./Pages/DecouvrirPrivas";
import Travaux from "./Pages/Travaux";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <p>bl lb  zsjbk</p>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Environnement" element={<Environnement />} />
          <Route path="Decouvrir-Privas" element={<DecouvrirPrivas/>}/>
          <Route path="/Culture" element={<Culture />} />
          <Route path="/Travaux" element={<Travaux/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
