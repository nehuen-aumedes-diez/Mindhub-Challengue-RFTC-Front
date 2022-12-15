import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import CamisetasF from "./pages/camisetasF/CamisetasF";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Market from "./components/market/Market";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasFDetalles" element={<CamisetasFDetalles/>}></Route>
        <Route path="/market" element={<Market/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
