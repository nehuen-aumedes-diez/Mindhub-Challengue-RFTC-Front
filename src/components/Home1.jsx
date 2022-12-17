import React from "react";
import "../styles/home1.css";
import Contador from "./Contador/Contador";

export default function Home1() {

  return (
    <>
      <Contador/>  
      <div className="home-container">
          <video autoPlay loop muted playsInline src="./vamomessi.mp4" className="mechi"></video>
        <div className="banner1">
          <div>
          <h2>La</h2>
          <h2>Camiseta</h2>
          <h2>NO</h2>
          <h2>se</h2>
          <h2>mancha</h2>
          </div>
        </div>
      </div>
    </>
  );
}
