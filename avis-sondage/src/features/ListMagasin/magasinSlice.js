import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";

const initialState = {
  magasinList: [],
  rayonList: [],
  isLoading: true,
};

export const getAllMagasinNames = createAsyncThunk(
  "magasin/getMagasinNames",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.get("/entities", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const magasinListSlice = createSlice({
  name: "magasin",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMagasinNames.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllMagasinNames.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      //state.magasinList = [];
      payload.map((e) => {
        if (!state.magasinList.includes(e.name)) {
          state.magasinList.push(e.name);
        }
        e.Services.map((el) => {
          if (!state.rayonList.includes(el.name)) {
            state.rayonList.push(el.name);
          }
        });
      });
    },
    [getAllMagasinNames.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default magasinListSlice.reducer;
