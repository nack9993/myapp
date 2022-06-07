import prisma from "../../lib/prisma";

const Playlist = ({ playlist }) => {
  console.log(playlist);
  return <div>playlist</div>;
};

export const getServerSideProps = async ({ query }) => {
  const playlist = await prisma.playlist.findUnique({
    where: {
      id: query.id,
    },
  });
  console.log(playlist);
  return { props: { playlist: {} } };
};

export default Playlist;
