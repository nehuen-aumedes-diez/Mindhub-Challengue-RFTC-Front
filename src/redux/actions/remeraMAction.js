import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getRemeraM = createAsyncThunk("getRemeraM", async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/remeraM/`);

    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getOneRemeraMId = createAsyncThunk(
  "getOneRemeraMId",
  async (_id) => {
    let url = ` ${BASE_URL}/remeraM/?_id=${_id}`;
    try {
      const res = await axios.get(url);
      console.log(res.data.res);
      return {
        remerasM: res.data.res,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);
const deleteRemeraM = createAsyncThunk("deleteRemeraM", async ({remeraMId}) => {

  try {
    const res = await axios.delete(`http://localhost:8000/api/remeraM/${remeraMId}`);

    return {
      success: true,
      response: res.data.message,
    };

  } catch (error) {
    console.log(error);
    
    return {
      payload: "Error",
    };
  }
});

const remeraMActions = {
  getRemeraM,
  getOneRemeraMId,
  deleteRemeraM
};

export default remeraMActions;