import Navbar from "../components/nav";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="flex">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
