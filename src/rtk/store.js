import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    blog: blogSlice,
  },
});
