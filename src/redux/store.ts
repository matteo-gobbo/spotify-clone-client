import { configureStore } from "@reduxjs/toolkit";
import selectTrackSlice from "./slice/selectedTrackSlice";

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch