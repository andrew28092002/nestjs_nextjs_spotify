import { ITrack, TTrackState } from "@/types/track";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAll } from "../actions/trackAsyncActions";

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
  },
});

export const trackReducer = trackSlice.reducer;
