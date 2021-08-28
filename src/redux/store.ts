import { configureStore } from "@reduxjs/toolkit";
import selectTrackSlice from "./slice/currentTrackSlice";

export const store = configureStore({
  reducer: {
    selectTrack: selectTrackSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch