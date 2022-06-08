import Home from "../components/home/home";
import PlayerBar from "../components/playerBar";
import prisma from "../lib/prisma";

const Homepage = ({ artists }) => {
  return (
    <div>
      {artists.map((artist) => (
        <div>{artist.name}</div>
      ))}
      <Home />
    </div>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Homepage;
