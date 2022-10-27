import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../components/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../components/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/users/login", user);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const user = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome Back ${user.lastname} `);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error("Invalid Credentials");
    },
  },
});

export default userSlice.reducer;
