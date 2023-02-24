import moment from "moment";
import React, { FC } from "react";

type Props = {
  left: number;
  right: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: "audio" | "volume";
};

const TrackProgress: FC<Props> = ({ left, right, onChange, type }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        value={left}
        max={right}
        onChange={onChange}
      />
      <div>
        {type !== "audio" ? left : moment.unix(left).format("mm:ss")} /{" "}
        {type !== "audio" ? right : moment.unix(right).format("mm:ss")}
      </div>
    </div>
  );
};

export default TrackProgress;
