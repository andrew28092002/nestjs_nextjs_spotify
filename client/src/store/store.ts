import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { playerReducer } from "./reducers/playerReducer";
import { trackReducer } from "./reducers/trackReducer";

const combinedReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
});

const reducer: typeof combinedReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

export const wrapper = createWrapper(makeStore, {debug: true});
