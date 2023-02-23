import { ITrack, TTrackState } from "@/types/track";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getAll, getOne } from "../actions/trackAsyncActions";

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
