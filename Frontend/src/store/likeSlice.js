import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likeFriends",
  initialState: [],
  reducers: {
    likeFriends: (state, action) => {
      state.push(action.payload);
    },
    unLikeFriends: (state, action) => {
      return state.filter((itemId) => {
        return itemId !== action.payload;
      });
    },
  },
});

export const likeActions = likeSlice.actions;
export default likeSlice;
