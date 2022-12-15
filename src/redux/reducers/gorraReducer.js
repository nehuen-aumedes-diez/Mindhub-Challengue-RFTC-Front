import { createReducer } from "@reduxjs/toolkit";
import gorraActions from "../actions/gorraAction";

const { getGorra, getOneGorraId, deleteGorra } = gorraActions

const initialState = {

  gorras: [],
  gorraId: '',
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
        gorraId: action.payload,
      };
    })
    .addCase(deleteGorra.fulfilled, (state, action) => {
      return {
        ...state,
        gorraId: action.payload.id
      }
    })
});

export default gorraReducer;