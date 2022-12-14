import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./components/market/Market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Market/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
