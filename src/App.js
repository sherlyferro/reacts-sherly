import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reloj from "./pages/Reloj";
import Joya from "./pages/Joya";
import Accesorio from "./pages/Accesorio";
import Detalle from "./pages/Detalle";
import Navbar from "./components/Navbar";
import ItemListContainer from "./pages/ItemListContainer";
import Footer from "./pages/Footer";

import Carrito from "./pages/Carrito";


//falta el iten count para saber cuantos productos tengo y costo//

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/relojes" element={<Reloj />} />
        <Route path="/joyas" element={<Joya />} />
        <Route path="/accesorios" element={<Accesorio />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
