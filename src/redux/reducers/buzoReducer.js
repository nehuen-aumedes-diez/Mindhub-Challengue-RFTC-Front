import { createReducer } from "@reduxjs/toolkit";
import buzoActions from "../actions/buzoAction";

const { getBuzo,getOneBuzoId } = buzoActions

const initialState = {

    busos: [ ],

};

const buzoReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getBuzo.fulfilled, (state, action) => {
    console.log(action);
        return {
          ...state,
          busos: action.payload,

        };
      })
      .addCase(getOneBuzoId.fulfilled, (state, action) => {
        return {
          ...state,
          busos: action.payload,
        };
      })
});


export default buzoReducer;