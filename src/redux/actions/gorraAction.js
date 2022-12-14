import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getGorra = createAsyncThunk("getGorra", async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/gorra/`);

    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getOneGorraId = createAsyncThunk(
  "getOneGorraId",
  async (_id) => {
    let url = ` ${BASE_URL}/gorra/?_id=${_id}`;
    try {
      const res = await axios.get(url);
      console.log(res.data.res);
      return {
        gorras: res.data.res,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);
const deleteGorra = createAsyncThunk("deleteGorra", async ({gorraId}) => {

  try {
    const res = await axios.delete(`http://localhost:8000/api/gorra/${gorraId}`);

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

const gorraActions = {
  getGorra,
  getOneGorraId,
  deleteGorra
};

export default gorraActions;