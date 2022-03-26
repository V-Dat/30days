import { useRef } from "react";
import ControlPlayer from "../ControlPlayer/ControlPlayer.js";
import InforCurrentMusic from "../InforCurrentMusic/InforCurrentMusic.js";
function HeadPlayer() {
  const audio = useRef();
  return (
    <>
      <InforCurrentMusic  />
      <ControlPlayer />
    </>
  );
}


export default HeadPlayer;
