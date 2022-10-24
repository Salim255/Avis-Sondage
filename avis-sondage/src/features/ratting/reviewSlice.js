import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  reviewItems: cartItems,
  totalComments: 0,
  avgRatting: 5,
  callPercentage: 100,
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
      let avgRatting = 0;
      let sumAllRatting = 0;
      let nmRatting = 0;
      state.reviewItems.forEach((item) => {
        sumAllRatting = sumAllRatting + item.ratting;
        nmRatting++;
      });
      avgRatting = ((sumAllRatting * 5) / (nmRatting * 5)).toFixed(1);
      state.avgRatting = avgRatting;
    },

    calculateCallPercentage: (state) => {
      let callBack = 0;
      let rattingnm = 0;
      let callPercentage = 0;

      state.reviewItems.forEach((item) => {
        rattingnm++;
        if (item.call) {
          callBack++;
        }
      });
      callPercentage = ((100 * callBack) / rattingnm).toFixed(0);
      state.callPercentage = callPercentage;
    },
  },
});

export const {
  calculateComments,
  calculatAvgRatting,
  calculateCallPercentage,
} = reviewSlice.actions;

export default reviewSlice.reducer;
