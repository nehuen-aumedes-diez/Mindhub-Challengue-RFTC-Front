import React from "react";
import "./App.css";
import Home from "./pages/Home";
import CamisetasF from "./pages/camisetasF/CamisetasF";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import Probando from "./components/Probando";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasFDetalles" element={<CamisetasFDetalles/>}></Route>
        <Route path="/hola" element={<Probando/>}></Route>
      </Routes>
    
  );
}

export default App;
