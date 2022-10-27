import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  user: null,
  isLoading: true,
};

export const getUserByOpinionId = createAsyncThunk(
  "user/userOpinion",
  async (id, thunkAPI) => {
    const list = thunkAPI.getState().statics.opinionsList;
    const user = list.find((e) => e.OpinionId === id);
    return user;
  }
);

const userOpinionSlice = createSlice({
  name: "userOpinion",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserByOpinionId.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserByOpinionId.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.user = payload;
      console.log("====================================");
      console.log(payload, "load load");
      console.log("====================================");
    },
    [getUserByOpinionId.rejected]: (state, { payload }) => {
      state.isLoading = false;
      //toast.error(payload);
    },
  },
});

//export const {getUser} = userOpinionSlice.actions;
export default userOpinionSlice.reducer;
