import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  surveyOptions: [],
  surveyDescription: "",
  status: "pending",
  isEditing: false,
  editSurvey: "",
};

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
