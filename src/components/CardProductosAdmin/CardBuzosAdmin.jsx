import React from "react";
import "./CardProductosAdmin.css";
import { Link as Linkeador } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/url";

const CardProductosAdmin = (props) => {
  let { img, nombre, precio, talle, id } = props;
  const nav = useNavigate()


  let deleteF = async (event) => {

    event.preventDefault();
    const data = { _id: id, };

    console.log(data);
    
    try {
      let res = await axios.delete(`${BASE_URL}/productos/${id}`, data)
      console.log(res);
      if (res.data.success) {
        nav("/stockGeneral");
        swal({
          title: "Coleccion eliminada",
          icon: "success",
          timer: "3000",
        });
      } 
    } catch (error) {
      console.log(error.message);
    }

  }
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
            <Linkeador to={`/editordeproductos/${id}`} >
              <li>Editar</li>
            </Linkeador>
            <li onClick={deleteF}>Eliminar coleccion </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardProductosAdmin;
