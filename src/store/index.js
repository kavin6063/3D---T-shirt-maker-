import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#787272",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo-code.png",
  fullDecal: "./logo-code.png",
});

export default state;
