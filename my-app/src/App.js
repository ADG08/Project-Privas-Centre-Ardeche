import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Environnement from "./Pages/Environnement";
import Culture from "./Pages/Culture";
import DecouvrirPrivas from "./Pages/DecouvrirPrivas";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Environnement" element={<Environnement />} />
          <Route path="Decouvrir-Privas" element={<DecouvrirPrivas/>}/>
          <Route path="/Culture" element={<Culture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
