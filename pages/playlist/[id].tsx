import SongTable from "../../components/songsTable";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlist = ({ playlist }) => {
  return (
    <div>
      {playlist.name}

      <SongTable songs={playlist.songs} />
    </div>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user;
  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        perminent: false,
        destination: "/signin",
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    // การเอา DATABASE ที่เกี่ยวข้องมาใช้
    // NOTE: include คือ join
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  console.log(playlist);
  return { props: { playlist } };
};

export default Playlist;
