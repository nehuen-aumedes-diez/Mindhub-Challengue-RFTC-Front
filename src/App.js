import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Probando from "./components/Probando";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hola" element={<Probando/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
