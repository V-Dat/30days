import ControlPlayer from "./ControlPlayer";
import InforCurrentPlayer from "./InforCurrentPlayer";

function HeadPlayer({ musics }) {
  return (
    <>
      <InforCurrentPlayer musics={musics} />
      <ControlPlayer musics={musics} />
    </>
  );
}

export default HeadPlayer;
