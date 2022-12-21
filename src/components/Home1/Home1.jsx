import React from "react";
import "./home1.css";
import Contador from "../Contador/Contador";
import { useEffect, useState } from "react";
import 'animate.css';

export default function Home1() {

  let [counter, setCounter] = useState(0)
  let [id, setId] = useState(0)

  const imagesBanner = 
  [
    "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/MODELS-WIDE-WEBSITE_2100x.jpg?v=1652804759",
    "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/FASHION-FOOTBALL-FANS-WEBSITE-ARGENTINA-C.jpg?v=1613705247%202500w%201669h",
    "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/FASHION-FOOTBALL-SOL-ARGENTINA-WEBSITE.jpg?v=1613705300%202400w%201602h",
  ]

  useEffect(()=>{
    let idInterval = setInterval(()=>{
      setCounter(counter + 1)
      if(counter === imagesBanner.length - 1){
        setCounter(0)
      }
  },4000)
    setId(idInterval)
    return clearInterval(id)
  },[counter])




  return (
    <div id="containerGeneralHome-1">
      <Contador/>  
      <div id="containerBanner">
        <img className="image-banner animate__animated animate__zoomIn animate__slow" src={imagesBanner[counter]} alt="" />
        {counter === 1 ? <h2 className="titulo-banner">- De tu equipo favorito -</h2> : counter === 2 ? <h2 className="titulo-banner2">- Ademas vestí los colores de la seleccion -</h2> : <h2 className="titulo-banner">- La mejor indumentaria retro -</h2> }
      </div>
    </div>
  );
}
