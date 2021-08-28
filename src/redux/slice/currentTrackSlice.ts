import { createSlice } from "@reduxjs/toolkit";
import { ITrack } from "../../models";

export interface SelectTrackState {
  track: ITrack | undefined;
}

const initialState: SelectTrackState = {
  track: undefined
}

export const selectTrackSlice = createSlice({
  name: 'selectTrack',
  initialState, 
  reducers: {
    selectTrack: (state, payload) => {
      state.track = payload.payload
    }
  }
})

export const { selectTrack } = selectTrackSlice.actions

export default selectTrackSlice.reducer