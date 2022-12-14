import { createReducer } from "@reduxjs/toolkit";
import remeraFActions from "../actions/remeraFAction";

const { getRemeraF, getOneRemeraFId, deleteRemeraF } = remeraFActions

const initialState = {

  remerasF: [],
  remeraFId:''
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
        remerasF: action.payload,
      };
    })
    .addCase(deleteRemeraF.fulfilled, (state, action) => {
      return {
        ...state,
        remeraFId: action.payload.id
      }
    })
});


export default remeraFReducer;