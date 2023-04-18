import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    hamberg: AppSlice,
    search: searchSlice,
  },
});

export default store;
