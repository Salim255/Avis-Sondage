import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  reviewItems: cartItems,
  totalComments: 0,
  avgRatting: 5,
  isLoading: true,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    calculateComments: (state) => {
      let totalComments = 0;
      state.reviewItems.forEach((item) => {
        if (item.review !== "") {
          totalComments++;
        }
      });
      state.totalComments = totalComments;
    },

    calculatAvgRatting: (state) => {
      //et avgRatting = 5;
      let sumAllRatting = 0;
      let nmRatting = 0;
      state.reviewItems.forEach((item) => {
        sumAllRatting = sumAllRatting + item.ratting;
        nmRatting++;
      });
      state.avgRatting = (sumAllRatting * 5) / (nmRatting * 5);
    },
  },
});

export const { calculateComments, calculatAvgRatting } = reviewSlice.actions;

export default reviewSlice.reducer;
