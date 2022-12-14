import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import CamisetasF from "./pages/camisetasF/CamisetasF";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import SignInSignUp from "./components/SignIn-SignUp/SignInSignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hola" element={<SignInSignUp/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasFDetalles" element={<CamisetasFDetalles/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
