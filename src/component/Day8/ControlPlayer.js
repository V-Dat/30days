import React, { useRef, useState } from "react";
import Button from "./Button";
import SeekBar from "./SeekBar";
import { useDispatch, useSelector } from "react-redux";
function ControlPlayer() {
  const listMusics = useSelector((state) => state.listMusicsReducer);

  const [show, setShow] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const audioElement = useRef();

  const dispatch = useDispatch();
  const length = Number(listMusics.length);
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleClickNext = () => {
    console.log(audioCurrent.isPlaying);
    if (
      (audioCurrent.isRandom && audioCurrent.isRepeat) ||
      audioCurrent.isRepeat
    ) {
      audioElement.current.currentTime = 0;
    } else if (audioCurrent.isRandom) {
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
        isPlaying: true,
      });
    } else if (audioCurrent.index === length - 1) {
      dispatch({
        type: "Next",
        payload: { ...listMusics[0], index: Number(0), isPlaying: true },
      });
    } else {
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[audioCurrent.index + 1],
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
          ...listMusics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
      });
    } else if (audioCurrent.index <= 0) {
      dispatch({
        type: "Prev",
        payload: { ...listMusics[length - 1], index: Number(length - 1) },
      });
    } else {
      dispatch({
        type: "Prev",
        payload: {
          ...listMusics[audioCurrent.index - 1],
          index: Number(audioCurrent.index - 1),
        },
      });
    }
  };

  const handlePause = () => {
    // audioCurrent.isPlaying = false;
    // setShow(false);
    setShow((prev) =>
      audioCurrent.isPlaying ? (prev = false) : (prev = true)
    );

    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    console.log("handlePause");
  };

  const handlePlay = () => {
    // audioCurrent.isPlaying = true;
    setShow((prev) =>
      audioCurrent.isPlaying ? (prev = true) : (prev = false)
    );

    audioElement.current.src !== null
      ? audioElement.current.play()
      : dispatch({ type: "Next", payload: { ...listMusics[0], index: 0 } });
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

  const handleAudioEnded = () => {
    console.log("Hết bài hát");
    handleClickNext();
  };

  return (
    <>
      <div className="player__control btn">
        <Button
          type="btn-repeat"
          icon={
            <i className={repeat ? "active fas fa-redo" : "fas fa-redo"}></i>
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
              ></i>{" "}
              <i
                className={
                  show ? "hide fas fa-play icon-play" : "fas fa-play icon-play"
                }
                onClick={handlePlay}
              ></i>{" "}
            </>
          }
        />
        <Button
          type="btn-next"
          icon={<i className="fas fa-step-forward"></i>}
          onClick={handleClickNext}
        />
        <Button
          onClick={handleRandom}
          type="btn-random"
          icon={
            <i
              className={random ? "active fas fa-random" : "fas fa-random"}
            ></i>
          }
        />
      </div>
      <div>
        <SeekBar audioElement={audioElement} setShow={setShow} />
      </div>

      <audio
        id="audio"
        className="audio"
        src={audioCurrent.mp3}
        autoPlay={true}
        ref={audioElement}
        onEnded={handleAudioEnded}
        onPlay={handlePlay}
      ></audio>
    </>
  );
}

export default ControlPlayer;
