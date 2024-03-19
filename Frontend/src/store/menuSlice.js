import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "fetchMenu",
  initialState: [],
  reducers: {
    fetchMenu: (state, action) => {
      return action.payload;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
