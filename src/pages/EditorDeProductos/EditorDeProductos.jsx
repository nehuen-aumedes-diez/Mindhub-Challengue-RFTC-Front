import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import './EditorDeProductos.css'

const EditorDeProductos = () => {

  const nombreInput = useRef()
  const foto1Input = useRef()
  const foto2Input = useRef()
  const precioInput = useRef()
  const talleSInput = useRef()
  const talleMInput = useRef()
  const talleLInput = useRef()
  const talleXLInput = useRef()
  const nav = useNavigate()
  let { id } = useParams();
  let _id = id

  let handleSubmit = async (event) => {

    event.preventDefault();

    const data = {

      nombre: nombreInput.current?.value,
      precio: precioInput.current.value,
      foto1: foto1Input.current.value,
      foto2: foto2Input.current.value,
      stock: [Number(talleSInput.current.value),
      Number(talleMInput.current.value),
      Number(talleLInput.current.value),
      Number(talleXLInput.current.value)],
    }

    console.log(data);
    try {
      let res = await axios.patch(`http://localhost:8000/api/productos/${id}`, data);

      if (res.data.success) {
        nav("/stockGeneral");
        swal({
          title: "Coleccion editada",
          icon: "success",
          timer: "3000",
        });
        handleSubmit.target.reset();
      } else {
        swal({
          title: "Ingrese todos los campos para modificar la coleccion",
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
      <h1 className="title11">Editor de Colecion</h1>

      <form className="card11">
        <label className="label11" for="nombre">

          <h3>Nombre del Modelo</h3>
        </label>
        <input
          className="input11"
          name="nombre"
          type="text"
          placeholder="... "
          ref={nombreInput}
          required
        />

        <label className="label11" for="foto1">
          <h3>Foto 1</h3>
        </label>
        <input
          className="input11"
          name="foto1"
          type="url"
          placeholder="Url: "
          ref={foto1Input}
        />
        <label className="label11" for="foto2">
          <h3>Foto 2</h3>
        </label>
        <input
          className="input11"
          name="foto2"
          type="url"
          placeholder="Url: "
          ref={foto2Input}
        />
        <label className="label11" for="precio">
          <h3>Precio</h3>
        </label>
        <input
          className="input11"
          name="precio"
          type="number"
          placeholder="$... "
          ref={precioInput}
        />
        <label className="label11" for="precio">
          <h3>Talle S</h3>
        </label>
        <input
          className="input11"
          name="stock"
          type="number"
          placeholder="... "
          ref={talleSInput}
        />
        <label className="label11" for="precio">
          <h3>Talle M</h3>
        </label>
        <input
          className="input11"
          name="stock"
          type="number"
          placeholder="... "
          ref={talleMInput}
        />
        <label className="label11" for="precio">
          <h3>Talle L</h3>
        </label>
        <input
          className="input11"
          name="stock"
          type="number"
          placeholder="... "
          ref={talleLInput}
        />
        <label className="label11" for="precio">
          <h3>Talle XL</h3>
        </label>
        <input
          className="input11"
          name="stock"
          type="number"
          placeholder="... "
          ref={talleXLInput}
        />
        <button type="button" id="btn11" value="Enviar" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default EditorDeProductos;
