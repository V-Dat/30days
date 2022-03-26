import "./ControlPlayer.css";

import Button from "../Button/Button.js";
import SeekBarControl from "../SeekBar/SeekBarControl";

import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ControlPlayer() {
  const [show, setShow] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [percent, setPercent] = useState(0);

  const audioElement = useRef();
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);
  const listMusics = useSelector((state) => state.listMusicsReducer);
  const length = Number(listMusics.length);


  const handleClickNext = () => {
    if (audioCurrent.isRepeat) {
      audioElement.current.currentTime = 0;
      return;
    }

    if (audioCurrent.isRandom) {
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
        isPlaying: true,
      });
      return;
    }

    if (length) {
      audioCurrent.index = (audioCurrent.index + 1 + length) % length;
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[audioCurrent.index],
          isPlaying: true,
          index: audioCurrent.index,
        },
      });
    }
  };

  const handleClickPrev = () => {
    if (audioCurrent.isRepeat) {
      audioElement.current.currentTime = 0;
      return;
    }

    if (audioCurrent.isRandom) {
      dispatch({
        type: "Prev",
        payload: {
          ...listMusics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
      });
    }

    if (length) {
      audioCurrent.index = (audioCurrent.index - 1 + length) % length;
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[audioCurrent.index],
          isPlaying: true,
          index: Number(audioCurrent.index),
        },
      });
    }
  };

  const handlePause = () => {
    setShow((prev) =>
      audioCurrent.isPlaying ? (prev = false) : (prev = true)
    );

    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    console.log("handlePause");
  };

  const handlePlay = () => {
    setShow((prev) =>
      audioCurrent.isPlaying ? (prev = true) : (prev = false)
    );

    audioElement.current.src !== null
      ? audioElement.current.play()
      : dispatch({ type: "Next", payload: { ...listMusics[0], index: 0 } });
    console.log("handlePlay");
  };

  const handleRandom = () => {
    audioCurrent.isRandom = !audioCurrent.isRandom;
    setRandom(audioCurrent.isRandom);
    console.log(audioCurrent);
  };

  const handleRepeat = () => {
    audioCurrent.isRepeat = !audioCurrent.isRepeat;
    setRepeat(audioCurrent.isRepeat);
    console.log(audioCurrent);
  };

  const handleAudioEnded = () => {
    console.log("Hết bài hát");
    handleClickNext();
  };

  const handlePlaying = () => {
    setShow((prev) =>
      audioCurrent.isPlaying ? (prev = true) : (prev = false)
    );
  };

  const handleSeekBarUpdate = () => {
    setPercent(
      (audioElement.current.currentTime / audioElement.current.duration) * 100
    );
  };

  const handleSeekBarInput = (e) => {
    audioElement.current.currentTime =
      (audioElement.current.duration * e.target.value) / 100;
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
      <div className="seekbar__control">
        <div>{audioElement.current.currentTime || '00 : 00' }</div>
        <SeekBarControl
          audioElement={audioElement}
          percent={percent}
          setPercent={setPercent}
          handleSeekBarInput={handleSeekBarInput}
        />
        <div>{audioElement.current.duration || '00 : 00' }</div>
      </div>
      <div>
        <audio
          id="audio"
          className="audio"
          src={audioCurrent.mp3}
          autoPlay={true}
          ref={audioElement}
          onEnded={handleAudioEnded}
          onPlay={handlePlaying}
          onTimeUpdate={handleSeekBarUpdate}
        ></audio>
      </div>
    </>
  );
}

export default ControlPlayer;
