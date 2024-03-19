import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "fetchPost",
  initialState: [],
  reducers: {
    fetchPost: (state, action) => {
      return action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
