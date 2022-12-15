import React from "react";
import "./App.css";
import CamisetasF from "./pages/camisetasF/CamisetasF";
import Home from "./pages/Home/Home";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound/Error";
import SignInSignUp from "./components/SignIn-SignUp/SignInSignUp";
import CamisetasM from './pages/CamisetasM/CamisetasM'
import Buzos from './pages/Buzos/Buzos'
import Gorras from "./pages/Gorras/Gorras";
import CamisetasMDetalles from "./pages/CamisetasMDetalles/CamisetasMDetalles";
import BuzosDetalles from "./pages/BuzosDetalles/BuzosDetalles";
import GorrasDetalles from "./pages/GorrasDetalles/GorrasDetalles";
import Contacto from "./pages/Contacto/Contacto";
import Nosotros from './pages/Nosotros/Nosotros'
import Contador from "./components/Contador/Contador";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF/:id" element={<CamisetasFDetalles/>}></Route>
        <Route path="/camisetasM/:id" element={<CamisetasMDetalles/>}></Route>
        <Route path="/hola" element={<SignInSignUp/>}></Route>
        <Route path="/chau" element={<Contador/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasFDetalles" element={<CamisetasFDetalles/>}></Route>
        <Route path="/camisetasM" element={<CamisetasM/>}></Route>
        <Route path="/buzos" element={<Buzos/>}></Route>
        <Route path="/buzos/:id" element={<BuzosDetalles/>}></Route>
        <Route path="/gorras" element={<Gorras/>}></Route>
        <Route path="/gorras/:id" element={<GorrasDetalles/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;