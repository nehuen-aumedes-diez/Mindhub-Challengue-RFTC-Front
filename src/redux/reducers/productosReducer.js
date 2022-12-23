import { createReducer } from "@reduxjs/toolkit";
import productosAction from "../actions/productosAction";

const { getProductos } = productosAction

const initialState = {
    productos: [],
}

const productosReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getProductos.fulfilled, (state, action) => {
            console.log(action)
            return{
                ...state,
                productos: action.payload,
            }
        })
})

export default productosReducer