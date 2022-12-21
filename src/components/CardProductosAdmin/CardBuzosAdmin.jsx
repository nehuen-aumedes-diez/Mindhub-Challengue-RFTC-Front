import React from "react";
import "./CardProductosAdmin.css";
import { Link as Linkeador } from "react-router-dom";




const CardBuzosAdmin = (props) => {
  let { img, nombre, precio, talle, id } = props;

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
          <h4>Precio:{precio}</h4>
          <h4>Talles:{talle}</h4>
        </div>

        <div class="info-card">
          <ul id="nav-links">
            <Linkeador to={`/editordebuzos/${id}`} >
              <li>Editar</li>
            </Linkeador>
            <Linkeador to={`/crearBuzo`}>
              <li>Crear</li>
            </Linkeador>
            <Linkeador to={`/borrar/${id}`}>
              <li>Borrar</li>
            </Linkeador>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardBuzosAdmin;
