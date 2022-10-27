import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  client: {},
  isLoading: true,
};
const clientSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    clientById: (state) => {},
  },
});

export default clientSlice.reducer;
