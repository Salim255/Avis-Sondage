import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./features/review/reviewSlice";
import surveyReducer from "./features/survey/surveySlice";
import userSlice from "./features/user/loginSlice";
import staticsReducer from "./features/statics/staticsSlice";
import userOpinionReducer from "./features/userOpinionSlice";
import opininoReducer from "./features/survey/opinionSlice";

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    survey: surveyReducer,
    user: userSlice,
    statics: staticsReducer,
    userOpinion: userOpinionReducer,
    opinions: opininoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
