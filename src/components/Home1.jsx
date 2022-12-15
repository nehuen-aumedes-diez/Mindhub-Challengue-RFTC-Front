import React from "react";
import "../styles/home1.css";
import Contador from "./Contador/Contador";

export default function Home1() {
  const tittle = "⚽ F I N A L I S T A S ⚽";
  const sub =
    " El sueño está más vivo que nunca. Siempre con ustedes, ¡VAMOS ARGENTINAAAA! ";
  return (
    <>
      <div className="home-container">
        <Contador />
        <div className="banner1">
          <img
            className="banner"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/reactivo-ar-13-mh-d_tcm216-975018.jpg"
          >
          </img>
          <h1 className="tittle-home">{tittle}</h1>
          <p className="subt">{sub}</p>
        </div>
      </div>
    </>
  );
}
