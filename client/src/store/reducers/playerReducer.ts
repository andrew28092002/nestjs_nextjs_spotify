import { IPlayer, PlayerActionTypes, TPlayerAction } from "@/types/player";

const initialState: IPlayer = {
  active: null,
  volume: 0,
  duration: 0,
  currentTime: 0,
  pause: false,
};

export const playerReducer = (state = initialState, action: TPlayerAction) => {
  switch (action.type) {
    case PlayerActionTypes.PLAY:
      return { ...state, pause: true };
    case PlayerActionTypes.PAUSE:
      return { ...state, pause: false };
    case PlayerActionTypes.SET_ACTIVE:
      return { ...state, active: action.payload };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
  }
};
