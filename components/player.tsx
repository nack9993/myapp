import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [seek, setSeek] = useState(0.0);
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);
  const [duration, setDuration] = useState(0.0);
  const soundref = useRef(null);

  const handlePrev = () => {
    setActiveSong(songs[songs.length - 1]);
    // Reset song
    soundref.current.seek(0);
  };

  useEffect(() => {
    let timerId;

    if (activeSong && activeSong.url) {
      const f = () => {
        setSeek(soundref.current.seek());
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);

      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [duration]);

  const onLoad = () => {
    const songDuration = soundref.current.duration();
    setDuration(songDuration);
  };

  const onEnd = () => {
    setPlaying(false);
    setDuration(0);
  };

  const onSeek = (e) => {
    setSeek(parseFloat(e[0]));
    soundref.current.seek(e[0]);
  };

  return (
    <div className="h-full">
      {activeSong.url ? (
        <ReactHowler
          ref={soundref}
          playing={playing}
          src={activeSong.url}
          onLoad={onLoad}
          onEnd={onEnd}
        ></ReactHowler>
      ) : null}
      { seek.toFixed(2) }
      <div className="h-full flex justify-center items-center">
        <button className="bg-white shadow-lg" onClick={handlePrev}>
          PREV
        </button>

        <div>
          <div className="font-bold text-1xl"> {activeSong.name} </div>
          <input
            className="w-full h-2 bg-gray-200 rounded-lg  cursor-pointer dark:bg-gray-700"
            type="range"
            min="1"
            max={duration ? (duration.toFixed(2) as unknown as number) : 0}
            value={seek}
            step={0.1}
            onChange={onSeek}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
