import { createReducer } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../actions/carritoAction";
import productosAction from "../actions/productosAction";

const { agregarAlcarro, removerUno, removerTodo, limpiarCarro } = cartActions;

const initialState = {
    carrito: [],
};


const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(agregarAlcarro.fulfilled, (state, action) => {
    /*       if (action.payload.success) {
            state.itemsInCart.push(action.payload.response);
        } */
            let dispatch = useDispatch()
            let { productos } = useSelector(store => store.productos)
            let { getProductos } = productosAction

            useEffect(() => {
                dispatch(getProductos())
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])
            console.log(productos);
            console.log(action)

            /* let nuevoItem = productos.find(prod => prod._id === action.payload) */
        })
        .addCase(removerUno.fulfilled, (state, action) => {
    /*       console.log(action.payload);
        return {
            itemsInCart: action.payload.cartItems,
        }; */
        })
        .addCase(removerTodo.fulfilled, (state, action) => {
    /*       console.log(action.payload);
        return {
            itemsInCart: action.payload.cartItems,
        }; */
        })
        .addCase(limpiarCarro.fulfilled, (state, action) => {
    /*       console.log(action.payload);
        return {
            itemsInCart: " ",
        }; */
        });
});

export default cartReducer;
