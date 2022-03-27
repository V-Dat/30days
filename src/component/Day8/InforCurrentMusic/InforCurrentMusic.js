import "./InforCurrentMusic.css";

import { useSelector } from "react-redux";

function InforCurrentMusic() {
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  return (
    <>
      <div className="player__playing">Current Song:</div>
      <div className="player__title">{audioCurrent.name}</div>
      <div
        className={`${
          audioCurrent.mp3 !== null
            ? "player__image image__rotating"
            : "player__image"
        } `}
        style={
          audioCurrent.isRotating
            ? { animationPlayState: "running" }
            : { animationPlayState: "paused" }
        }
      >
        <img
          className={`player__image__url  `}
          alt="Tên bài hát"
          src={
            process.env.PUBLIC_URL + `${audioCurrent.image}` === "undefined"
              ? process.env.PUBLIC_URL + "/img/day8/default.jpg"
              : process.env.PUBLIC_URL + `${audioCurrent.image}`
          }
        />
      </div>
    </>
  );
}

export default InforCurrentMusic;
