import { ITrack } from "@/types/track";
import React, { FC } from "react";

type Props = {
  track: ITrack;
  active?: boolean;
};

const TrackItem: FC<Props> = ({ track, active = false }) => {
  return <div>{track.name}</div>;
};

export default TrackItem;
