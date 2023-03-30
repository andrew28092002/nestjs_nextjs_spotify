import { ITrack, TTrackState } from "@/types/track";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTrack, getAll } from "../actions/trackAsyncActions";

const initialState: TTrackState = {
  tracks: [],
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAll.fulfilled,
      (state, action: PayloadAction<ITrack[]>) => {
        state.tracks = action.payload;
      }
    );
    builder.addCase(
      createTrack.fulfilled,
      (state, action: PayloadAction<ITrack>) => {
        state.tracks = state.tracks.filter(
          (track) => track._id !== action.payload._id
        );
      }
    );
  },
});

export const trackReducer = trackSlice.reducer;
