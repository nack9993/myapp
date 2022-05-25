import { usePlaylist } from "../lib/hooks";

const Navbar = () => {
  const { playlists } = usePlaylist();
  return (
    <div className="h-screen w-1/4 bg-white shadow-lg p-4">
      <div className="font-bold text-lg">Plasylists</div>
      <div>
        {playlists.map((playlist) => {
          return (
            <div
              className="transition-all cursor-pointer hover:underline"
              key={playlist.id}
            >
              {playlist.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
