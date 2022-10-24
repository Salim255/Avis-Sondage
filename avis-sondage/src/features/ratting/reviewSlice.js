import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  reviewItems: cartItems,
  isLoading: true,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
});

export default reviewSlice.reducer;
