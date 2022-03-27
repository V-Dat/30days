import ControlPlayer from "../ControlPlayer/ControlPlayer.js";
import InforCurrentMusic from "../InforCurrentMusic/InforCurrentMusic.js";
function HeadPlayer() {
  return (
    <>
      <InforCurrentMusic />
      <ControlPlayer />
    </>
  );
}

export default HeadPlayer;
