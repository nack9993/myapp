import { usePlaylist } from "../../lib/hooks";

const Home = () => {
  const { playlists } = usePlaylist();

  console.log(playlists);

  return (
    <div className="h-screen bg-gray">
      <div className="w-full flex justify-center">
        <div className="h-full bg-white mt-28 w-[95%]">
          <div className="relative bottom-14  flex justify-between ml-10 mr-10">
            {/* Avatar */}
            <div className="flex left-10">
              <div className=" w-[200px] h-[200px] shadow-2xl rounded-full bg-white bg-[url('data:image/jpeg;base64,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')]">
                {/* Avatar */}
              </div>
              {/* Artist information */}
              <div className="ml-5 mt-3">
                <div className="text-dark-gray text-sm">Artist</div>
                <div className="text-black font-bold text-3xl">Nack</div>

                {/* Tag */}
                <div className="flex space-x-2 mt-5">
                  <div className="p-1 rounded-md text-black/75 border border-dark-gray  text-xs font-bold">
                    Pop
                  </div>
                  <div className="p-1 rounded-md text-black/75 border border-dark-gray  text-xs font-bold">
                    Indie
                  </div>
                  <div className="p-1 rounded-md text-black/75 border border-dark-gray  text-xs font-bold">
                    Blue
                  </div>
                  <div className="p-1 rounded-md text-black/75 border border-dark-gray  text-xs font-bold">
                    Alternative rock
                  </div>
                </div>

                {/* follow */}
                <div className="mt-8">
                  <button
                    type="button"
                    className="w-28 h-10 border rounded-md text-black/75 border-dark-gray "
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                className="pl-8 pr-8 pt-1 pb-1 rounded-3xl text-white bg-secondary shadow-md"
              >
                Play
              </button>
            </div>
          </div>

          <div className="ml-10">
            <div className="flex space-x-8">
              <div>General</div>
              <div className="text-dark-gray">Tracks</div>
              <div className="text-dark-gray">Albrums</div>
              <div className="text-dark-gray">Similars artists</div>
            </div>

            <hr className="m-2 text-dark-gray" />

            <div className="mt-10">
              <div className="font-bold text-2xl">Top tracks</div>

              <div className="flex flex-wrap ">
                {" "}
                {playlists.map((playlist) => {
                  return (
                    <div
                      className="bg-secondary text-white w-[180px] h-[180px] m-4 flex justify-center items-center shadow-lg rounded-lg transition-all cursor-pointer hover:shadow-2xl"
                      key={playlist.id}
                    >
                      {playlist.name}
                    </div>
                  );
                })}
              </div>

              {/* <table className="text-center">
                <th className="p-4 border-b border-dark-gray">#</th>
                <th className="p-4 border-b border-dark-gray w-[250px]">
                  Title
                </th>
                <th className="p-4 border-b border-dark-gray w-[250px]">
                  Album
                </th>
                <th className="p-4 border-b border-dark-gray">More</th>

                <tr>
                  <td className="p-4">1</td>
                  <td className="p-4 w-[250px]">Sex on Fire</td>
                  <td className="p-4 w-[250px] text-dark-gray">
                    Only by the night
                  </td>
                  <td className="p-4">3:05</td>
                </tr>
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
