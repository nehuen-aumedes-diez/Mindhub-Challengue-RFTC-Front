import React from "react";
import "./CardProductosAdmin.css";

const CardGorraAdmin = (props) => {
let {img, nombre, precio, id} = props

  return (
    <>

      <div id="wrapper">
        <div id="my-icon">
          <img src={img}></img>
        </div>
        <div id="my-info">
          <h1>{nombre}</h1>
        </div>
     <div className="precios-Admin">
     <h4>
Precio:{precio}
     </h4>

     </div>
       
        <div class="info-card">
          <ul id="nav-links">
            <li>Editar</li>
            <li>Crear</li>
            <li>Borrar</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardGorraAdmin;
