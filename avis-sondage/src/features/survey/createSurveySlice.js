import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../components/axios";
import { toast } from "react-toastify";
import {
  addSondageIdToLocalStorage,
  removecreatedSondageIdFromLocalStorage,
} from "../../components/localStorage";
import { getAllReviews } from "../review/reviewSlice";
import { getAllOpinions } from "./opinionSlice";

const initialState = {
  isLoading: false,
  createdSurvey: [],
  context: "",
  title: "",
  startDate: "",
  option: "",
  image: "",
  endDate: "",
  status: "pending",
  surveyOptions: [],
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
      console.log(resp.data, "from create survey");
      //dispatch(thunkAPI.getState().getAllOpinions)
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const createOption = createAsyncThunk(
  "survey/createOption",

  async (formData, thunkAPI, type) => {
    console.log("====================================");
    console.log("from create option", formData);
    console.log("====================================");
    try {
      console.log(formData, "from back");
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.post("/choices/create", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(resp.data);
      thunkAPI.dispatch(clearValues());
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

export const editSurvey = createAsyncThunk(
  "survey/editSurvey",
  async ({ surveyId, survey }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.put(`/polls/${surveyId}`, survey, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editOption = createAsyncThunk(
  "survey/editeOption",

  async ({ optionId, option }, thunkAPI) => {
    console.log("From option", optionId, option);
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.put(`/choices/${optionId}`, option, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      // console.log(thunkAPI.getState());
      thunkAPI.dispatch(clearValues());
      thunkAPI.dispatch(
        getAllOpinions({ startDate: "2021-10-14", endDate: "2023-11-01" })
      );
      console.log("====================================");
      console.log("Helloooo", resp.data);
      console.log("====================================");
      return resp.data;
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      if (error.response.status === 409) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteOption = createAsyncThunk(
  "survey/deleteSurvey",
  async (optionId, thunkAPI) => {
    //thunkAPI.dispatch(showLoading());
    console.log(optionId);
    try {
      const token = thunkAPI.getState().user.user.token;
      const resp = await customFetch.delete(`/choices/${optionId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      //To get the latest opinions, without deleted one
      thunkAPI.dispatch(
        getAllOpinions({ startDate: "2021-10-14", endDate: "2023-11-01" })
      );
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
    handleChange: (state, { payload: { id, name, value } }) => {
      state[name] = value;
    },
    handleOptionChange: (state, { payload: { id, name, value } }) => {
      state[name] = value;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    setEditSurvey: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearValues: () => {
      return initialState;
    },
  },
  extraReducers: {
    [createSurvey.pending]: (state) => {
      state.isLoading = true;
    },
    [createSurvey.fulfilled]: (state, { payload }) => {
      state.createdSurvey = payload;
      state.isLoading = false;
      addSondageIdToLocalStorage(state.createdSurvey.id);
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
    [editSurvey.pending]: (state) => {
      state.isLoading = true;
    },
    [editSurvey.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Survey Modified");
    },
    [editSurvey.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.error);
    },
    [createOption.pending]: (state) => {
      state.isLoading = true;
    },
    [createOption.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      removecreatedSondageIdFromLocalStorage();
      toast.success("Optioncreated");
    },
    [createOption.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.error);
    },
    [editOption.pending]: (state) => {
      state.isLoading = true;
    },
    [editOption.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Option modified");
    },
    [editOption.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log("====================================");
      console.log(payload, "hey hey");
      console.log("====================================");
      toast.error(payload);
    },
  },
});

export const {
  handleChange,
  handleOptionChange,
  setEditSurvey,
  showLoading,
  hideLoading,
  clearValues,
} = surveySlice.actions;
export default surveySlice.reducer;
