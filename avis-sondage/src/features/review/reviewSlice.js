import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import customFetch from "../../components/axios";
import { toast } from "react-toastify";

const initialState = {
  reviewItems: [],
  user: null,
  isLoading: true,
};

export const getAllReviews = createAsyncThunk(
  "review/getReviews",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.get("/opinions", {
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

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    getClientById: (state, id) => {
      state.reviewItems.forEach((item) => {
        if ((item.id = id)) {
          state.user = item;
        }
      });
    },
    /*   calculateComments: (state) => {
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
    }, */
  },
  extraReducers: {
    [getAllReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllReviews.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.reviewItems = payload;
    },
    [getAllReviews.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  calculateComments,
  calculatAvgRatting,
  calculateCallPercentage,
  getClientById,
} = reviewSlice.actions;

export default reviewSlice.reducer;
