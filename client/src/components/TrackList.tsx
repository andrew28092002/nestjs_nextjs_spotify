import { ITrack } from "@/types/track";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import TrackItem from "./TrackItem";

type Props = {
  tracks: ITrack[];
};

const TrackList: FC<Props> = ({ tracks }) => {
  return (
    <Grid container flexDirection="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
