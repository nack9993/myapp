import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  return <div>{activeSong.name}</div>;
};

export default Player;
