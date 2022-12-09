import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "../../components/axios";
import { toast } from "react-toastify";

const initialState = {
  staticsItems: [],
  opinionsList: [],
  isLoading: true,
};

export const getStaticsByDate = createAsyncThunk(
  "review/getStatics",
  async (date, thunkAPI) => {
    console.log(date, "from back");
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.get(
        `/opinions/listbyDateAndEntity/${date.entity}/${date.dates1}/${date.dates2}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

/* export const getViewsByDateAndEntity = createAsyncThunk(
  "review/getStatics",
  async (dateAndEntity, thunkAPI) => {
    console.log("====================================");
    console.log(dateAndEntity);
    console.log("====================================");
    try {
      const token = thunkAPI.getState().user.user.token;
      /*  const resp = await customFetch.get(
        "/opinions/listbyDateAndEntity/9/2022-10-11/2022-10-30",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      ); 
      const resp = "hello";
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
); */
const staticsSlice = createSlice({
  name: "statics",
  initialState,

  extraReducers: {
    [getStaticsByDate.pending]: (state) => {
      state.isLoading = true;
    },
    [getStaticsByDate.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload.opinionList, "Hello from statics");
      state.staticsItems = payload;
      console.log(payload.opinionList, "Hello from statics");
      state.opinionsList = payload.opinionList;
    },
    [getStaticsByDate.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    /*   [getViewsByDateAndEntity.pending]: (state) => {
      state.isLoading = true;
    },
    [getViewsByDateAndEntity.fulfilled]: (state, { payload }) => {
      /*  state.isLoading = false;
      state.staticsItems = payload;
      state.opinionsList = payload.opinionList; 
      console.log("====================================");
      console.log("Hello world", payload);
      state.isLoading = false;
      state.staticsItems = payload;
      console.log("====================================");
    },
    [getViewsByDateAndEntity.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    }, */
  },
});

export const {} = staticsSlice.actions;

export default staticsSlice.reducer;
