import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";
import { toast } from "react-toastify";
import { addSondageIdToLocalStorage } from "../../components/localStorage";

const initialState = {
  survyById: [],
  isLoading: false,
};

export const getSurveyBy = createAsyncThunk(
  "survey/createSurvey",

  async (survey, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.post("polls/create", survey, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      //thunkAPI.dispatch(clearValues);
      return resp.data;
    } catch (error) {
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createSurvey = createAsyncThunk(
  "survey/createSurvey",

  async (survey, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.post("polls/create", survey, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      //thunkAPI.dispatch(clearValues);
      return resp.data;
    } catch (error) {
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//Create the slice

const surveySlice = createSlice({
  name: "createdSurvey",
  initialState,
  reducers: {},
  extraReducers: {
    [createSurvey.pending]: (state) => {
      state.isLoading = true;
    },
    [createSurvey.fulfilled]: (state, { payload }) => {
      state.createdSurvey = payload;
      addSondageIdToLocalStorage(state.createdSurvey.id);
      state.isLoading = false;
      toast.success("You Have Seccessfully Created You New Survey");
    },
    [createSurvey.rejected]: (state, { payload }) => {
      state.isLoading = false;

      if (payload.error === "poll already exists") {
        toast.error("Contexte du Sondage  déjà existe");
      } else {
        toast.error(payload.error);
      }
    },
  },
});

//export const { handleChange, clearValues } = surveySlice.actions;
export default surveySlice.reducer;
