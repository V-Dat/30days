import ControlPlayer from "./ControlPlayer";
import InforCurrentPlayer from "./InforCurrentPlayer";

function HeadPlayer({ musics }) {
  return (
    <>
      <InforCurrentPlayer  />
      <ControlPlayer musics={musics} />
    </>
  );
}

export default HeadPlayer;
