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
        `/opinions/listbyDateAndEntity/9/${date.dates1}/${date.dates2}`,
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

const staticsSlice = createSlice({
  name: "statics",
  initialState,

  extraReducers: {
    [getStaticsByDate.pending]: (state) => {
      state.isLoading = true;
    },
    [getStaticsByDate.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.staticsItems = payload;

      state.opinionsList = payload.opinionList;
    },
    [getStaticsByDate.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {} = staticsSlice.actions;

export default staticsSlice.reducer;
