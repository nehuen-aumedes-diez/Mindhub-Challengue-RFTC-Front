import { createReducer } from "@reduxjs/toolkit";
import cartActions from "../actions/carrito";

const { 
    agregarAlcarro,
    removerUno,
    removerTodo,
    limpiarCarro
 } = cartActions

const initialState={
    itemsInCart: []
}

const cartReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(agregarAlcarro.fulfilled,(state,action)=>{
            if(action.payload.success){
                state.itemsInCart.push(action.payload.response)
            }
        })
        .addCase(removerUno.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
                itemsInCart: action.payload.cartItems
            }
        })
        .addCase(removerTodo.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
                itemsInCart: action.payload.cartItems
            }
        })
        .addCase(limpiarCarro.fulfilled,(state,action)=>{
          console.log(action.payload);
          return {
                itemsInCart: " "
          }
      })
    })



export default cartReducer