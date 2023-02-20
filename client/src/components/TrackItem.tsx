import { ITrack } from "@/types/track";
import { Card } from "@mui/material";
import React, { FC } from "react";

type Props = {
  track: ITrack;
  active?: boolean;
};

const TrackItem: FC<Props> = ({ track, active = false }) => {
  return <Card>{track.name}</Card>;
};

export default TrackItem;
