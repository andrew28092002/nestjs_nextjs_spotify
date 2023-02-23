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

export const store = makeStore()


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, {debug: true})