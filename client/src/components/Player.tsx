import { Pause, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styles from "./../styles/Player.module.scss";

const Player = () => {
  const active = false;
  return (
    <div className="styles">
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
    </div>
  );
};

export default Player;
