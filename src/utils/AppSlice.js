import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    ismenuopen: true,
  },
  reducers: {
    togglemenu: (state) => {
      state.ismenuopen = !state.ismenuopen;
    },
    closeMenu: (state) => {
      state.ismenuopen = false;
    },
    opentoggle: (state) => {
      state.ismenuopen = true;
    },
  },
});

export const { togglemenu, closeMenu, opentoggle } = appSlice.actions;
export default appSlice.reducer;
