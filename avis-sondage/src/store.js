import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./features/ratting/reviewSlice";
console.log("====================================");
console.log(reviewReducer);
console.log("====================================");
export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});
