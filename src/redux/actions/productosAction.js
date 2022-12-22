import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductos = createAsyncThunk('getProductos', async() => {
    try{
        const res = await axios.get(`http://localhost:8000/api/productos`)
        console.log("action productos", res);
        return res.data.res
    } catch (error){
        console.log(error.message)
        return {
            payload: "Error",
        }
    }
})

const productosAction = {
    getProductos,
}

export default productosAction