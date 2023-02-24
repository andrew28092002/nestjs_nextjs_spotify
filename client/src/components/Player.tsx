import {
  pauseTrack,
  playTrack,
  setCurrentTime,
  setDuration,
  setVolume,
} from "@/store/reducers/playerReducer";
import { useTypedDispatch } from "@/types/typedHooks/useTypedDispatch";
import { useTypedSelector } from "@/types/typedHooks/useTypedSelector";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { FC, useEffect } from "react";
import styles from "./../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

let audio: HTMLAudioElement;

const Player: FC = () => {
  const { pause, volume, active, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      if (pause) {
        setAudio().then(() => play());
      }
    }
  }, [active]);

  const setAudio = async () => {
    if (active) {
      audio.src = "http://localhost:4000/" + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
    }
  };

  const play = () => {
    if (!pause) {
      dispatch(playTrack());
      audio.play();
    } else {
      dispatch(pauseTrack());
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(setVolume(Number(e.target.value)));
  };
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    dispatch(setCurrentTime(Number(e.target.value)));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {!pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
        type="audio"
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress
        left={volume}
        right={100}
        onChange={changeVolume}
        type="volume"
      />
    </div>
  );
};

export default Player;
