import React from "react";
import "./App.css";
import Home from "./pages/Home";
import PaginaRemerasF from "./pages/PaginaRemerasF/PaginaRemerasF";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hola" element={<PaginaRemerasF/>}></Route>
      </Routes>
    
  );
}

export default App;
