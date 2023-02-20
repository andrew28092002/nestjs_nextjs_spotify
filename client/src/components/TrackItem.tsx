import { ITrack } from "@/types/track";
import { Delete, MoreHoriz, Pause, PlayArrow } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styles from "./../styles/TrackItem.module.scss";

type Props = {
  track: ITrack;
  active?: boolean;
};

const TrackItem: FC<Props> = ({ track, active = false }) => {
  const router = useRouter();
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img src={track.picture} />
      <Grid
        container
        direction="column"
        style={{ width: "200px", margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div>0:22 / 3:22</div>}
      <IconButton style={{ marginLeft: "auto" }}>
        <Delete />
      </IconButton>
      <IconButton
        style={{ marginLeft: "auto" }}
        onClick={() => router.push("/track/" + track._id)}
       >
        <MoreHoriz />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
