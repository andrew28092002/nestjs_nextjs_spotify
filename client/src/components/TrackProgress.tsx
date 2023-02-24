import moment from "moment";
import React, { FC } from "react";

type Props = {
  left: number;
  right: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const TrackProgress: FC<Props> = ({ left, right, onChange }) => {
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
        {moment.unix(left).format('mm:ss')} / {moment.unix(right).format('mm:ss')}
      </div>
    </div>
  );
};

export default TrackProgress;
