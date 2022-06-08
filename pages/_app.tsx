import { createStore, StoreProvider } from "easy-peasy";
import storeModel from "../lib/store";
import Navbar from "../components/nav";
import "../styles/globals.css";
import PlayerBar from "../components/playerBar";

const store = createStore(storeModel);

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      <div className="h-[87vh]">
        <div className="h-full flex">
          <Navbar />
          <Component {...pageProps} />
        </div>
        <PlayerBar />
      </div>
    </StoreProvider>
  );
};

export default MyApp;
