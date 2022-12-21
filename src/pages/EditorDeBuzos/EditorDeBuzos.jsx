import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EditorDeBuzos.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const EditorDeBuzos = () => {
  const nombreInput = useRef();
  const precioInput = useRef();
  const foto1Input = useRef();
  const foto2Input = useRef();
  const nav = useNavigate()
  let id = useParams();
  let _id = id.id;
  const envioDatos = async (event) => {
    event.preventDefault();
    const data = {
      nombre: nombreInput.current.value,
      precio: precioInput.current.value,
      foto1: foto1Input.current.value,
      foto2: foto2Input.current.value,
      _id,
    };
    console.log(data);
    
    try {
      let res = await axios.patch(`http://localhost:8000/api/buzo/${id}`, data);
      if (res.data.success) {
        nav("/");
        swal({
          title: "Successfully Created!!",
          icon: "success",
          timer: "3000",
        });
        envioDatos.target.reset();
      }
    } catch (error) {
      console.log(error);
      swal("Error in created", error.response.data.message.join("\n"));
    }
  };
    
    return (
      <div className="container11">
      <h1 className="title11">Editor de Buzos</h1>

      <div className="card11">
        <label className="label11" for="nombre">
          {" "}
          <h3>Nombre del Modelo</h3>
        </label>
        <input
          className="input11"
          name="nombre"
          type="text"
          ref={nombreInput}
          placeholder="... "
        />

        <label className="label11" for="foto1">
          <h3>Foto 1</h3>
        </label>
        <input
          className="input11"
          name="foto1"
          type="url"
          ref={foto1Input}
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
          placeholder="$... "
        />
        <button type="button" id="btn11" value="Enviar" onClick={envioDatos}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default EditorDeBuzos;
