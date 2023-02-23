import {
  IPlayer,
} from "@/types/player";
import { ITrack } from "@/types/track";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPlayer = {
  active: null,
  volume: 0,
  duration: 0,
  currentTime: 0,
  pause: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack: (state) => {
      state.pause = true;
    },
    pauseTrack: (state) => {
      state.pause = false;
    },
    setActive: (state, action: PayloadAction<ITrack>) => {
      state.active = action.payload;
      state.duration = 0
      state.currentTime = 0
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const {playTrack, pauseTrack, setActive, setDuration, setCurrentTime, setVolume} = playerSlice.actions
export const playerReducer = playerSlice.reducer