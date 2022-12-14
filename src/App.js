import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Probando from "./components/Probando";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hola" element={<Probando/>}></Route>
      </Routes>
    
  );
}

export default App;
