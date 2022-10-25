import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./features/ratting/reviewSlice";
import surveyReducer from "./features/survey/surveySlice";

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    survey: surveyReducer,
  },
});
