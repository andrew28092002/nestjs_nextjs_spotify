import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { combineReducers, createStore } from "redux";
import { playerReducer } from "./reducers/playerReducer";

export const makeStore = () =>
  configureStore({
    reducer: {
      player: playerReducer,
    },
  });

type Store = ReturnType<typeof makeStore>

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export const wrapper = createWrapper(makeStore, {debug: true})