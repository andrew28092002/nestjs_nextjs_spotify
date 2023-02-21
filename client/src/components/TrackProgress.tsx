import React, { FC } from "react";

type Props = {
  left: number;
  right: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const TrackProgress: FC<Props> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="range" min={left} value={left} max={right} onChange={onChange} />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
