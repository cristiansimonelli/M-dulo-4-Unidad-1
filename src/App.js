import "./App.css";

// Es en el App.js donde importo todos los componentes que forman mi sitio web
// import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// importamos nuestros componentes
import Header from "./componente/layout/Header";
import Footer from "./componente/layout/Footer";
import Nav from "./componente/layout/Nav";

// importo las diferentes páginas del sitio

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import Gafoto from "./pages/Gafoto";
import Gavideo from "./pages/Gavideo";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav></Nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/galeriaf" element={<Gafoto />} />
          <Route path="/galeriav" element={<Gavideo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />

        </Routes>

      </BrowserRouter>

      <Footer></Footer>

    </div>
  );
}

export default App;
