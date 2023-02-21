import { ITrack } from "./track";

export interface IPlayer {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionTypes {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  SET_ACTIVE = "SET_ACTIVE",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_VOLUME = "SET_VOLUME",
}

export interface IPlayAction {
  type: PlayerActionTypes.PLAY;
}

export interface IPauseAction {
  type: PlayerActionTypes.PAUSE;
}

export interface ISetActiveAction {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: ITrack;
}

export interface ISetDurationAction {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
}

export interface ISetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}

export interface ISetVolume {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}

export type TPlayerAction =
  | IPlayAction
  | IPauseAction
  | ISetActiveAction
  | ISetDurationAction
  | ISetCurrentTimeAction
  | ISetVolume;
