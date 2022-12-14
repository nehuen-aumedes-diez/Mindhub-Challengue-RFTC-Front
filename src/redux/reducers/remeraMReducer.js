import { createReducer } from "@reduxjs/toolkit";
import remeraMActions from "../actions/remeraMAction";

const { getRemeraM,getOneRemeraMId } = remeraMActions

const initialState = {

    remerasM: [ ],

};

const remeraMReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getRemeraM.fulfilled, (state, action) => {
    console.log(action);
        return {
          ...state,
          remerasM: action.payload,

        };
      })
      .addCase(getOneRemeraMId.fulfilled, (state, action) => {
        return {
          ...state,
          remerasM: action.payload,
        };
      })
});


export default remeraMReducer;