import {
  pauseTrack,
  playTrack,
  setActive,
} from "@/store/reducers/playerReducer";
import { ITrack } from "@/types/track";
import { useTypedDispatch } from "@/types/typedHooks/useTypedDispatch";
import { useTypedSelector } from "@/types/typedHooks/useTypedSelector";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styles from "./../styles/TrackItem.module.scss";
import moment from "moment";

type Props = {
  track: ITrack;
  active?: boolean;
};

const TrackItem: FC<Props> = ({ track, active=false }) => {
  const router = useRouter();
  const dispatch = useTypedDispatch();
  const { currentTime, duration } = useTypedSelector(
    (state) => state.player
  );

  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(setActive(track));
    dispatch(playTrack());
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={play}>
        {!active? <PlayArrow /> : <Pause />}
      </IconButton>
      <img
        width={70}
        height={70}
        src={"http://localhost:4000/" + track.picture}
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && (
        <div>
          {moment(currentTime).format('mm:ss')} / {moment(duration).format('mm:ss')}
        </div>
      )}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
