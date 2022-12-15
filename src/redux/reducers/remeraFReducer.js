import { createReducer } from "@reduxjs/toolkit";
import remeraFActions from "../actions/remeraFAction";

const { getRemeraF,getOneRemeraFId } = remeraFActions

const initialState = {

    remerasF: [ ],
    remeraFencontrada: [],

};

const remeraFReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getRemeraF.fulfilled, (state, action) => {
    console.log(action);
        return {
          ...state,
          remerasF: action.payload,

        };
      })
      .addCase(getOneRemeraFId.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          remeraFencontrada: action.payload.remeraFencontrada,
        };
      })
});


export default remeraFReducer;