import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import friendsSlice from "./friendsSlice";
import postSlice from "./postSlice";
import likeSlice from "./likeSlice";
import fetchStatusSlice from "./fetchStatusSlice";
const facebookStore = configureStore({
  reducer: {
    fetchMenu: menuSlice.reducer,
    fetchFriends: friendsSlice.reducer,
    fetchPost: postSlice.reducer,
    likeFriends: likeSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default facebookStore;
