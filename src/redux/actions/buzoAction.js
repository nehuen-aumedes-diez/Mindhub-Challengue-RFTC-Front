import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getBuzo = createAsyncThunk("getBuzo", async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/buzo/`);

    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const deleteBuzo = createAsyncThunk("deleteBuzo", async ({buzoId}) => {

  try {
    const res = await axios.delete(`http://localhost:8000/api/buzo/${buzoId}`);

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
const getOneBuzoId = createAsyncThunk(
  "getOneBuzoId",
  async (_id) => {
    let url = ` ${BASE_URL}/buzo/?_id=${_id}`;
    try {
      const res = await axios.get(url);
      console.log(res.data.res);
      return {
        buzos: res.data.res,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const buzoActions = {
  getBuzo,
  deleteBuzo,
  getOneBuzoId,
};

export default buzoActions;