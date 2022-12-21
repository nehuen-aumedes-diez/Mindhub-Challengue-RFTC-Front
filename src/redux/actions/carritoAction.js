import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../api/url";

const agregarAlcarro = createAsyncThunk("agregarAlcarro", async () => {
  /* let url = `${BASE_URL}/carrito/`;
  try {
    let res = await axios.post(url);
    console.log(res);
    if (res.data.item) {
      return {
        success: true,
        response: res.data.item,
      };
    } else {
      return {
        success: false,
        response: res.data.mensaje,
      };
    }
  } catch (error) {
    return {
      success: false,
      response: "ocurrio un error",
    };
  } */
  
});

const removerUno = createAsyncThunk("removerUno", async (id) => {
  let url = `${BASE_URL}carrito/${id}`;
  try {
    const res = await axios.post(url);
    console.log(res);
  } catch (error) {
    console.log(error);
    return {
      payload: "error",
    };
  }
});

const removerTodo = createAsyncThunk("removerTodo", async (id) => {
  let url = `${BASE_URL}carrito/${id}`;
  try {
    const res = await axios.delete(url);
    console.log(res);
  } catch (error) {
    console.log(error);
    return {
      payload: "error",
    };
  }
});
const limpiarCarro = createAsyncThunk("limpiarCarro", async () => {
  let url = `${BASE_URL}carrito/`;
  try {
    const res = await axios.delete(url);
    console.log(res);
  } catch (error) {
    console.log(error);
    return {
      payload: "error",
    };
  }
});

const cartActions = {
  agregarAlcarro,
  removerUno,
  removerTodo,
  limpiarCarro,
};

export default cartActions;
