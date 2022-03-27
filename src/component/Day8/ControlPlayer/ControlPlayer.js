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
  const length = Number(listMusics.length) ? Number(listMusics.length) : 0;

  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(false);
  // console.log('audioElement.current truoc prev: ' ,audioElement.current === undefined ? 'undefine' : audioElement.current.src == '' )

  const handleClickNext = () => {
    // Mỗi khi play/pause => mặc định audio luôn play và nút pause được show [event onPlaying]

    if (repeat) {
      audioElement.current.currentTime = 0;
      return;
    }

    if (random) {
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

    const nextIndex = (audioCurrent.index + 1 + length) % length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[nextIndex],
        isPlaying: true,
        index: nextIndex,
      },
    });
    // lần đầu tiên nếu audio Elemenc.src = '' => không method play err
    if (audioElement.current !== undefined && audioElement.current.src !== "") {
      audioElement.current.play();
    }
  };

  const handleClickPrev = () => {
    // Mỗi khi play/pause => mặc định audio luôn play và nút pause được show [event onPlaying]

    if (repeat) {
      audioElement.current.currentTime = 0;
      return;
    }

    if (random) {
      dispatch({
        type: "Prev",
        payload: {
          ...listMusics[Math.floor(Math.random() * length)],
          index: Number(Math.floor(Math.random() * length)),
        },
      });
    }
    const prevIndex = (audioCurrent.index - 1 + length) % length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[prevIndex],
        isPlaying: true,
        index: Number(prevIndex),
      },
    });

    // lần đầu tiên nếu audio Elemenc.src = '' => không method play err
    if (audioElement.current !== undefined && audioElement.current.src !== "") {
      audioElement.current.play();
    }
  };

  const handlePause = () => {
    audioCurrent.isPlaying = false;
    setShow(audioCurrent.isPlaying);

    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    dispatch({
      type: "Pause",
      payload: {
        isPlaying: false,
        isRotating: false,
      },
    });
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
  };

  const handleRandom = () => {
    audioCurrent.isRandom = !audioCurrent.isRandom;
    setRandom(audioCurrent.isRandom);
  };

  const handleRepeat = () => {
    audioCurrent.isRepeat = !audioCurrent.isRepeat;
    setRepeat(audioCurrent.isRepeat);
  };

  const handleAudioEnded = () => {
    handleClickNext();
  };

  const handlePlaying = () => {
    setShow(true);
  };

  const handleAudioUpdate = () => {
    if (!audioCurrent.isSeeking) {
      setPercent(
        (audioElement.current.currentTime / audioElement.current.duration) * 100
      );
    }
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
      <div className="player__seekbar-control">
        <SeekBarControl
          audioElement={audioElement}
          percent={percent || 0}
          setPercent={setPercent}
        />
      </div>
      <div className="player__audio-control">
        <audio
          id="audio"
          className="audio"
          src={audioCurrent.mp3}
          autoPlay={true}
          loop={audioCurrent.isRepeat}
          ref={audioElement}
          onEnded={handleAudioEnded}
          onPlay={handlePlaying}
          onTimeUpdate={handleAudioUpdate}
          seeking={`${audioCurrent.isSeeking}`}
        ></audio>
      </div>
    </>
  );
}

export default ControlPlayer;
