import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  createdSurvey: [],
  isEditing: false,
  editSurvey: "",
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
      console.log("====================================");
      console.log(resp, "RRRRR");
      console.log("====================================");
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
      state.isLoading = false;
      state.createdSurvey = payload;
      toast.success("You Have Seccessful Created You New Survey");
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
