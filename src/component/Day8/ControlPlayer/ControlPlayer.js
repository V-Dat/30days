import "./ControlPlayer.css";

import Button from "../Button/Button.js";
import SeekBarControl from "../SeekBar/SeekBarControl";

import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ControlPlayer() {
  const audioElement = useRef();
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);
  const listMusics = useSelector((state) => state.listMusicsReducer);
  const length = Number(listMusics.length) || 0;
  console.log("length", length);

  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(audioCurrent.isPlaying);

  const handleClickNext = () => {
    // Mỗi khi play/pause => mặc định audio luôn play và nút pause được show [event onPlaying]
    audioElement.current.play();

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

    audioCurrent.index = (audioCurrent.index + 1 + length) % length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[audioCurrent.index],
        isPlaying: true,
        index: audioCurrent.index,
      },
    });
  };

  const handleClickPrev = () => {
    // Mỗi khi play/pause => mặc định audio luôn play và nút pause được show [event onPlaying]
    audioElement.current.play();

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

    audioCurrent.index = (audioCurrent.index - 1 + length) % length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[audioCurrent.index],
        isPlaying: true,
        index: Number(audioCurrent.index),
      },
    });
  };

  const handlePause = () => {
    audioCurrent.isPlaying = false;
    setShow(audioCurrent.isPlaying);

    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    console.log("handlePause");

    dispatch({
      type: "Pause",
      payload: {
        isPlaying: false,
        isRotating: false,
      },
    });
    console.log(audioCurrent.isRotating);
  };

  const handlePlay = () => {
    if (audioElement.current.src === "") {
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[0],
          index: 0,
          isPlaying: true,
          isRotating: true,
        },
      });
      return;
    }

    dispatch({ type: "Play", payload: { isPlaying: true, isRotating: true } });

    audioCurrent.isPlaying = true;

    setShow(audioCurrent.isPlaying);
    audioElement.current.play();
    console.log(audioCurrent.isRotating);
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
    console.log("Khi audio play => show btn pause");
    setShow(true);
  };

  const handleAudioUpdate = () => {
    // if(isSeeking){
      setPercent(
        (audioElement.current.currentTime / audioElement.current.duration) * 100
        );
    // }
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
        {/* <div>{audioElement.current.currentTime || '00 : 00' }</div> */}
        <SeekBarControl audioElement={audioElement} percent={percent} />
        {/* <div>{audioElement.current.duration || '00 : 00' }</div> */}
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
          onTimeUpdate={handleAudioUpdate}
        ></audio>
      </div>
    </>
  );
}

export default ControlPlayer;
