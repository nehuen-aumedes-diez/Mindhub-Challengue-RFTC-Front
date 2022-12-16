import { createReducer } from "@reduxjs/toolkit";
import { TYPES } from "../actions/carrito";

const {ADD_TO_CART , REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART} = TYPES

export const cartInitialState ={

    products:[],
    cart:[]

}

const remeraFReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(ADD_TO_CART.fulfilled, (state, action) => {
        console.log(action);
        return {
          ...state,
          cart: ,
        };
      })
      .addCase(REMOVE_ONE_FROM_CART.fulfilled, (state, action) => {
        return {
          ...state,
          cart: ,
        };
      })
      .addCase(REMOVE_ALL_FROM_CART.fulfilled, (state, action) => {
        return {
          ...state,
          cart: 
        }
      })
      .addCase(CLEAR_CART.fulfilled, (state, action) => {
        console.log("reducer DE FILTRAR: ", action.payload);
        return {
            ...state,
            cart: ,
        }
      })
  });