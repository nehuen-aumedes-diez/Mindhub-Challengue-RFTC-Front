import { createAsyncThunk } from '@reduxjs/toolkit'
import { Action } from '@remix-run/router'
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const agregarAlcarro = createAsyncThunk('addToCart', async () => {
    let url = `${BASE_URL}carrito/`
    try {
      let res = await axios.post(url,data)
    console.log(res);
      if (res.data.item){
        return {
          success: true,
          response: res.data.item,
        }
      } else {
        return {
          success: false,
          response: res.data.mensaje
        }
      }
    } catch(error) {
      return {
        success: false,
        response: 'ocurrio un error'
      }
    }
  })

const obtenerCarro = createAsyncThunk('getItemsInCart', async ()=>{
  try {
    const res = await axios.get(
        `${BASE_URL}carrito/`
    )
    console.log(res);
    return {
        cartItems : res.data.itemsCart,
    }
} catch (error) {
    console.log(error);
    return {
        payload: "Error"
    }
}
})
const agregarItem=createAsyncThunk("deleteItems",async(id)=>{
 let url=`${BASE_URL}carrito/${id}`
  try {
    const res = await axios.post(
      url
       )
    console.log(res);
  } catch (error) {
    console.log(error);
    return{
      payload:"error"
    }
  }
})
const borrarItem=createAsyncThunk("deleteItems",async(id)=>{
  let url=`${BASE_URL}carrito/${id}`
   try {
     const res = await axios.delete(
       url
        )
     console.log(res);
   } catch (error) {
     console.log(error);
     return{
       payload:"error"
     }
   }
 })



const cartActions = {
    agregarAlcarro,
    obtenerCarro,
    borrarItem,
    agregarItem
}

export default cartActions