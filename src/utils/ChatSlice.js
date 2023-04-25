import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_CHAT} from './const'
const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.message.splice(OFFSET_LIVE_CHAT,1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addmessage } = ChatSlice.actions;
export default ChatSlice.reducer;
