import { createReducer } from "@reduxjs/toolkit";
import buzoActions from "../actions/buzoAction";

const { getBuzo, getOneBuzoId, deleteBuzo } = buzoActions

const initialState = {

  busos: [],
  buzoId: '',
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
    }).addCase(deleteBuzo.fulfilled, (state, action) => {
      return {
        ...state,
        buzoId: action.payload.id
      }
    })
});


export default buzoReducer;