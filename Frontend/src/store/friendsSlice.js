import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "fetchFriends",
  initialState: [],
  reducers: {
    fetchFriends: (state, action) => {
      return action.payload;
    },
  },
});

export const friendsActions = friendsSlice.actions;
export default friendsSlice;
