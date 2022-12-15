import React from "react";
import "./App.css";
import CamisetasF from "./pages/CamisetasF/CamisetasF";
import Home from "./pages/Home/Home";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import SignInSignUp from "./components/SignIn-SignUp/SignInSignUp";
import Market from './components/market/Market'
import CamisetasM from './pages/CamisetasM/CamisetasM'
import Buzos from './pages/Buzos/Buzos'
import Gorras from "./pages/Gorras/Gorras";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF/:id" element={<CamisetasFDetalles/>}></Route>
        <Route path="/hola" element={<SignInSignUp/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasM" element={<CamisetasM/>}></Route>
        <Route path="/buzos" element={<Buzos/>}></Route>
        <Route path="/gorras" element={<Gorras/>}></Route>
        <Route path="/market" element={<Market/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
