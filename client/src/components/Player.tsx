import { ITrack } from "@/types/track";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { FC } from "react";
import styles from "./../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

type Props = {
  track: ITrack;
};

const Player: FC<Props> = () => {
  const active = false;
  const track = {name: 'adfa', artist: 'asdfsdaf'}
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: "200px", margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => {
      }} />
    </div>
  );
};

export default Player;
