import { createReducer } from "@reduxjs/toolkit";
import cartActions from "../actions/carrito";

const { 
    agregarAlcarro,
    obtenerCarro,
    borrarItem,
    getItemsInCart
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
        .addCase(obtenerCarro.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
                itemsInCart: action.payload.cartItems
            }
        })
        .addCase(getItemsInCart.fulfilled,(state,action)=>{
            console.log(action.payload);
            return {
                itemsInCart: action.payload.cartItems
            }
        })
        .addCase(borrarItem.fulfilled,(state,action)=>{
          console.log(action.payload);
          return {
              
          }
      })
    })



export default cartReducer