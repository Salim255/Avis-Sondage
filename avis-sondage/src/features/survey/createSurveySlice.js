import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";
import { toast } from "react-toastify";
import { addSondageIdToLocalStorage } from "../../components/localStorage";
import { getAllReviews } from "../review/reviewSlice";
import { getAllOpinions } from "./opinionSlice";

const initialState = {
  id: null,
  isLoading: false,
  createdSurvey: [],
  status: "pending",
  surveyOptions: "",
  isEditing: false,
  editSurveyId: "",
};

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

export const deleteSurvey = createAsyncThunk(
  "survey/deleteSurvey",
  async (surveyId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.delete(`/polls/${surveyId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      //To get the latest opinions, without deleted one
      thunkAPI.dispatch(getAllOpinions());
      return resp.data;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//Create the slice

const surveySlice = createSlice({
  name: "createdSurvey",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
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
    [deleteSurvey.fulfilled]: (state, { payload }) => {
      toast.success(payload.message);
    },
    [deleteSurvey.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
  },
});

export const { handleChange, showLoading, hideLoading } = surveySlice.actions;
export default surveySlice.reducer;
