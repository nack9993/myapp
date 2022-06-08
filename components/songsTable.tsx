import { useStoreActions } from "easy-peasy";

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions((store: any) => store.changeActiveSongs);
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0]);
    playSongs(songs);
  };

  return (
    <div className="flex flex-wrap">
      {songs.map((song) => (
        <button
          key={song.id}
          type="button"
          className="w-[200px] h-[200px] shadow-lg flex justify-center items-center m-2 cursor-pointer"
          onClick={() => handlePlay(song)}
        >
          {song.name}
        </button>
      ))}
    </div>
  );
};

export default SongTable;
