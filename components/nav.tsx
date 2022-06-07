import Link from "next/link";
import { usePlaylist } from "../lib/hooks";

const Navbar = () => {
  const { playlists } = usePlaylist();
  return (
    <div className="h-screen w-1/4 bg-white shadow-lg p-4">
      <div className="font-bold text-lg">Plasylists</div>
      <div>
        {playlists.map((playlist) => {
          return (
            <div className="cursor-pointer  hover:underline ">
              <Link
                href={{
                  pathname: "/playlist/[id]",
                  query: { id: playlist.id },
                }}
                className="transition-all"
                key={playlist.id}
              >
                {playlist.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
