import React from "react";
import "./App.css";
import Home from "./pages/Home";
import CamisetasF from "./pages/CamisetasF/CamisetasF";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasF/:id" element={<CamisetasFDetalles/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
