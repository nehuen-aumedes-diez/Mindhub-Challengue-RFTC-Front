import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getProductos = createAsyncThunk('getProductos', async() => {
    try{
        const res = await axios.get(`${BASE_URL}/productos`)
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