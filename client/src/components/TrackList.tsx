import { getAll } from "@/store/actions/trackAsyncActions";
import { wrapper } from "@/store/store";
import { ITrack } from "@/types/track";
import { useTypedSelector } from "@/types/typedHooks/useTypedSelector";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import TrackItem from "./TrackItem";

interface Props {
  tracks: ITrack[]
}

const TrackList: React.FC<Props> = ({tracks}) => {

  return (
      <Grid container direction="column">
          <Box p={2}>
              {tracks.map(track =>
                  <TrackItem
                      key={track._id}
                      track={track}
                  />
              )}
          </Box>
      </Grid>
  );
};

export default TrackList;
