import { createReducer } from "@reduxjs/toolkit";
import remeraMActions from "../actions/remeraMAction";

const { getRemeraM, getOneRemeraMId, deleteRemeraM } = remeraMActions

const initialState = {

  remerasM: [],
  remeraMId:''
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
    .addCase(deleteRemeraM.fulfilled, (state, action) => {
      return {
        ...state,
        remeraMId: action.payload.id
      }
    })
});


export default remeraMReducer;