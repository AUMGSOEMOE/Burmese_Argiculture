import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: false,
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    processing: (state, action) => {
      state.loading = true;
      state.data = null;
    },
    ready: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    wrong: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = true;
    },
  },
});

export const { processing, ready, wrong } = blogSlice.actions;
export default blogSlice.reducer;
