import { IPlayer } from "@/types/player";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { playerReducer } from "./reducers/playerReducer";

const combinedReducers = combineReducers({
  player: playerReducer,
});

const rootReducer = (state: CombinedState<{ player: IPlayer; }> | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducers(state, action);
  }
};

export const makeStore = () => configureStore({ reducer: rootReducer });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, { debug: true });
