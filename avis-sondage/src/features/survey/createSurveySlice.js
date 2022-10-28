import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";

const initialState = {
  isLoading: false,
  createdSurvey: [],
  isEditing: false,
  editSurvey: "",
};

export const creatSurvey = createAsyncThunk(
  "survey/createSurvey",
  async (survey, thunkAPI) => {
    try {
      const resp = await customFetch.post("polls/create", survey, {
        headers: {
          authorization: `Bearer : ${thunkAPI.getState().user.user.token}`,
        },
      });
      //thunkAPI.dispatch(clearValues);
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        return error;
      }
    }
  }
);

//Create the slice

const surveySlice = createSlice({
  name: "createdSurvey",
  initialState,
  reducers: {},
  extraReducers: {
    [creatSurvey.pending]: (state) => {
      state.isLoading = true;
    },
    [creatSurvey.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.createdSurvey = payload;
    },
    [creatSurvey.rejected]: (state, { payload }) => {
      state.isLoading = false;
      //toast.error(payload);
    },
  },
});

//export const { handleChange, clearValues } = surveySlice.actions;
export default surveySlice.reducer;
