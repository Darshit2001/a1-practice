import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import ChatSlice from "./ChatSlice";
import searchSlice from "./SearchSlice";


const store = configureStore({
  reducer: {
    hamberg: AppSlice,
    search: searchSlice,
    chat:ChatSlice,
  },
});

export default store;
