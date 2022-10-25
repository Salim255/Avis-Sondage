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
});

export default surveySlice.reducer;
