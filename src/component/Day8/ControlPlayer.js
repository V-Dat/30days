import React, { useRef, useState } from "react";
import Button from "./Button";
import SeekBar from "./SeekBar";
import { useDispatch, useSelector } from "react-redux";
function ControlPlayer({ musics }) {
  const [show, setShow] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const audioElement = useRef();
  const buttonPlay = useRef();
  const buttonPause = useRef();
  const buttonRandom = useRef();
  const buttonRepeat = useRef();
  const buttonNext = useRef();

  const dispatch = useDispatch();
  const length = Number(musics.length);
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleClickNext = () => {
    console.log(audioCurrent.isPlaying);
    console.log(buttonPlay.current);
    console.log(buttonPause.current);
    if (
      (audioCurrent.isRandom && audioCurrent.isRepeat) ||
      audioCurrent.isRepeat
    ) {
      audioElement.current.currentTime = 0;
    } else if (audioCurrent.isRandom) {
      dispatch({
        type: "Next",
        payload: {
          ...musics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
        isPlaying: true,
      });
    } else if (audioCurrent.index === length - 1) {
      dispatch({
        type: "Next",
        payload: { ...musics[0], index: Number(0), isPlaying: true },
      });
    } else {
      dispatch({
        type: "Next",
        payload: {
          ...musics[audioCurrent.index + 1],
          index: Number(audioCurrent.index + 1),
          isPlaying: true,
        },
      });
    }
  };

  const handleClickPrev = () => {
    if (
      (audioCurrent.isRandom && audioCurrent.isRepeat) ||
      audioCurrent.isRepeat
    ) {
      audioElement.current.currentTime = 0;
    } else if (audioCurrent.isRandom) {
      dispatch({
        type: "Prev",
        payload: {
          ...musics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
      });
    } else if (audioCurrent.index <= 0) {
      dispatch({
        type: "Prev",
        payload: { ...musics[length - 1], index: Number(length - 1) },
      });
    } else {
      dispatch({
        type: "Prev",
        payload: {
          ...musics[audioCurrent.index - 1],
          index: Number(audioCurrent.index - 1),
        },
      });
    }
  };

  const handlePause = () => {
    audioCurrent.isPlaying = false;
    setShow(false);

    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    console.log("handlePause");
  };

  const handlePlay = () => {
    audioCurrent.isPlaying = true;
    setShow(true);

    audioElement.current.src !== null
      ? audioElement.current.play()
      : dispatch({ type: "Next", payload: { ...musics[0], index: 0 } });
    console.log("handlePlay");
  };

  const handleRandom = () => {
    if (audioCurrent.isRandom === true) {
      audioCurrent.isRandom = false;
      setRandom(false);
    } else {
      audioCurrent.isRandom = true;
      setRandom(true);
    }

    console.log(audioCurrent);
  };

  const handleRepeat = () => {
    if (audioCurrent.isRepeat === true) {
      audioCurrent.isRepeat = false;
      setRepeat(false);
    } else {
      audioCurrent.isRepeat = true;
      setRepeat(true);
    }

    console.log(audioCurrent);
  };

  return (
    <>
      <div className="player__control btn">
        <Button
          type="btn-repeat"
          icon={
            <i
              className={repeat ? "active fas fa-redo" : "fas fa-redo"}
              ref={buttonRepeat}
            ></i>
          }
          onClick={handleRepeat}
        />

        <Button
          type="btn-prev"
          icon={<i className="fas fa-step-backward"></i>}
          onClick={handleClickPrev}
        />

        <Button
          type="btn-toggle-play"
          icon={
            <>
              <i
                className={
                  show
                    ? "show fas fa-pause icon-pause"
                    : "fas fa-pause icon-pause"
                }
                onClick={handlePause}
                ref={buttonPlay}
              ></i>{" "}
              <i
                className={
                  show ? "hide fas fa-play icon-play" : "fas fa-play icon-play"
                }
                onClick={handlePlay}
                ref={buttonPause}
              ></i>{" "}
            </>
          }
        />
        <Button
          type="btn-next"
          icon={<i className="fas fa-step-forward" ref={buttonNext}></i>}
          onClick={handleClickNext}
        />
        <Button
          onClick={handleRandom}
          type="btn-random"
          icon={
            <i
              className={random ? "active fas fa-random" : "fas fa-random"}
              ref={buttonRandom}
            ></i>
          }
        />
      </div>
      <div>
        <SeekBar
          buttonNext={buttonNext}
          audioElement={audioElement}
          setShow={setShow}
        />
      </div>

      <audio
        id="audio"
        className="audio"
        src={audioCurrent.mp3}
        autoPlay={true}
        ref={audioElement}
      ></audio>
    </>
  );
}

export default ControlPlayer;
