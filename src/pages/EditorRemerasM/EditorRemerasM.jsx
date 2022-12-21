import React, { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const EditorDeRemerasM = () => {
  const nombreInput = useRef();
  const precioInput = useRef();
  const foto1Input = useRef();
  const foto2Input = useRef();
  const nav = useNavigate()
  let {id} = useParams();
  let _id = id.id;


  const [data,setData] = useState( {
    nombre: "",
    precio: "",
    foto1: "",
    foto2: "",
    _id,
  });
  const getInput = (e) => {
    setData({
      ...data, 
      [e.target.name]:e.target.value

    })
  }
  const envioDatos = async (event) => {
    event.preventDefault();
  
   

    
    console.log(data);
    console.log(id)
    try {
      let res = await axios.patch(`http://localhost:8000/api/productos/${id}`, data);
      console.log(res)
      if (res.data.success) {
        nav("/");
        swal({
          title: "Coleccion Editada",
          icon: "success",
          timer: "3000",
        });
        envioDatos.target.reset();
      }else{
        swal({
          title: "Ingrese Todos Los Campos para modificar",
          icon: "warning",
          timer: "3000",
        });
      }
    } catch (error) {
      console.log(error);
      swal("Error in created", error.response.data.message.join("\n"));
    }
  };

    return (
      <div className="container11">
      <h1 className="title11">Editor de Remeras Femeninas</h1>

      <div className="card11">
        <label className="label11" for="nombre">
         
          <h3>Nombre del Modelo</h3>
        </label>
        <input
          className="input11"
          name="nombre"
          type="text"
          ref={nombreInput}
          onChange={getInput}
          required
          placeholder="... "
        />

        <label className="label11" for="foto1">
          <h3>Foto 1</h3>
        </label>
        <input
          className="input11"
          name="foto1"
          type="url"
          required
         
          onChange={getInput}
          placeholder="Url: "
        />
        <label className="label11" for="foto2">
          <h3>Foto 2</h3>
        </label>
        <input
          className="input11"
          name="foto2"
          type="url"
          ref={foto2Input}
          onChange={getInput}
          required
          placeholder="Url: "
        />
        <label className="label11" for="precio">
          <h3>Precio</h3>
        </label>
        <input
          className="input11"
          name="precio"
          type="number"
          ref={precioInput}
          onChange={getInput}
          required
          placeholder="$... "
        />
        <button type="button" id="btn11" value="Enviar" onClick={envioDatos}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default EditorDeRemerasM;
