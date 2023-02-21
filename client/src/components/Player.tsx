import { ITrack } from "@/types/track";
import { Pause, PlayArrow } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { FC } from "react";
import styles from "./../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

type Props = {
    track: ITrack
}

const Player: FC<Props> = ({ track }) => {
  const active = false;
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
      <TrackProgress left={0} right={0} onChange={() => {}}/>
    </div>
  );
};

export default Player;
