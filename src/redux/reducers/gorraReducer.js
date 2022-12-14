import { createReducer } from "@reduxjs/toolkit";
import gorraActions from "../actions/gorraAction";

const { getGorra,getOneGorraId } = gorraActions

const initialState = {

    gorras: [ ],

};

const gorraReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getGorra.fulfilled, (state, action) => {
    console.log(action);
        return {
          ...state,
          gorras: action.payload,

        };
      })
      .addCase(getOneGorraId.fulfilled, (state, action) => {
        return {
          ...state,
          gorras: action.payload,
        };
      })
});


export default gorraReducer;