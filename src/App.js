import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CamisetasF from "./pages/camisetasF/CamisetasF";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasFDetalles" element={<CamisetasFDetalles/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
