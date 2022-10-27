import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";

const initialState = {
  isLoading: false,
  surveyOptions: [],
  surveyDescription: "",
  status: "pending",
  isEditing: false,
  editSurvey: "",
};

export const creatSurvey = createAsyncThunk(
  "survey/createSurvey",
  async (survey, thunkAPI) => {
    try {
      const resp = await customFetch.post("/survey", survey, {
        headers: {
          authorization: `Bearer : ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues);
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
  name: "survey",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },

    clearValues: () => {
      return initialState;
    },
  },
});

export const { handleChange, clearValues } = surveySlice.actions;
export default surveySlice.reducer;
