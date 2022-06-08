import { action } from "easy-peasy";

export default {
  activeSongs: [],
  activeSong: {},
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload;
  }),
};
