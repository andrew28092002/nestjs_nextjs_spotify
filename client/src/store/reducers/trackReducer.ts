import { ITrack, TTrackState } from "@/types/track";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAll, getOne } from "../actions/trackAsyncActions";

const initialState: TTrackState = {
  tracks: [],
  isLoading: false
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
        state.isLoading = true
    }),
    builder.addCase(getAll.fulfilled, (state, action: PayloadAction<ITrack[]>) => {
        state.tracks = action.payload
        state.isLoading = false
    })
  }
});


export const trackReducer = trackSlice.reducer
