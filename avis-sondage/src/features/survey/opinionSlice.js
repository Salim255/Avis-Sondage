import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import customFetch from "../../components/axios";

const initialState = {
  allOpinions: [],
  isLoading: true,
};

export const getAllOpinions = createAsyncThunk(
  "opinion/allOpinions",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.post(
        "/polls/getbyDate/2022-10-14/2022-10-30",
        {
          headers: {
            authorization: `Bearer : ${thunkAPI.getState().user.user.token}`,
          },
        }
      );
      //thunkAPI.dispatch(clearValues);
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        return error;
      }
    }
  }
);

const opinionSlice = createSlice({
  name: "opinion",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllOpinions.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllOpinions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.allOpinions = payload;
    },
    [getAllOpinions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      //toast.error(payload);
    },
  },
});

//export const {  } = opinionSlice.actions;
export default opinionSlice.reducer;
