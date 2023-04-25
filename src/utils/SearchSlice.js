import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
      // state = { ...state, ...action.payload };                            Not working don't know why???
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
