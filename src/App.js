import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./components/market/Market";
import Probando from "./components/Probando";
import Layout from "./layout/Layout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hola" element={<Probando/>}></Route>
        <Route path="/" element={<Market/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
