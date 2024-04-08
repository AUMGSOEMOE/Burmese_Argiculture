import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slice/blog.slice";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});
