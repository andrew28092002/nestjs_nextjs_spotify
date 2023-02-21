import React, { FC } from "react";

type Props = {
  left: number;
  right: number;
  onChange: Function;
};

const TrackProgress: FC<Props> = ({ left, right }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="range" />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
