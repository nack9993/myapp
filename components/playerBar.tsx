import { useStoreState } from "easy-peasy";
import Player from "./player";

const PlayerBar = () => {
  const songs = useStoreState((state: any) => {
    return state.activeSongs;
  });
  const activeSong = useStoreState((state: any) => {
    return state.activeSong;
  });

  return (
    <div className="h-[120px] w-full bg-slate-500 shadow-lg">
      {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
    </div>
  );
};

export default PlayerBar;
