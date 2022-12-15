import { createReducer } from "@reduxjs/toolkit";
import remeraFActions from "../actions/remeraFAction";

const { getRemeraF, getOneRemeraFId, deleteRemeraF, filtrarRemerasF } = remeraFActions

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
      return {
        ...state,
        remeraFencontrada: action.payload.remeraFencontrada,
      };
    })
    .addCase(deleteRemeraF.fulfilled, (state, action) => {
      return {
        ...state,
        remeraFId: action.payload.id
      }
    })
    .addCase(filtrarRemerasF.fulfilled, (state, action) => {
      //console.log("ACTION DE FILTRAR: ", action.payload);
      return {
          ...state,
          remerasF: action.payload.remerasF,
      }
    })
});


export default remeraFReducer;