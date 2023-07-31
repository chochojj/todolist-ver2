import { atom } from "recoil";

export const openSideState = atom({
  key: "openSideState",
  default: false,
});

export const darkModeState = atom({
  key: "darkModeState",
  default: false,
});
