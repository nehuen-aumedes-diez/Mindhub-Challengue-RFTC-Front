import { createReducer } from "@reduxjs/toolkit";
import remeraFActions from "../actions/remeraFAction";

const { getRemeraF,getOneRemeraFId } = remeraFActions

const initialState = {

    remerasF: [ ],

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
});


export default remeraFReducer;