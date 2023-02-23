import {
  pauseTrack,
  playTrack,
  setCurrentTime,
  setDuration,
  setVolume,
} from "@/store/reducers/playerReducer";
import { ITrack } from "@/types/track";
import { useTypedDispatch } from "@/types/typedHooks/useTypedDispatch";
import { useTypedSelector } from "@/types/typedHooks/useTypedSelector";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { FC, useEffect } from "react";
import styles from "./../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

type Props = {
  track: ITrack;
};

let audio: any;

const Player: FC<Props> = () => {
  const { pause, duration, volume, active, currentTime } = useTypedSelector(
    (state) => state.player
  );
  const dispatch = useTypedDispatch();

  if (!active) return null;

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
    }
  };

  const play = () => {
    if (pause) {
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

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
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
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
