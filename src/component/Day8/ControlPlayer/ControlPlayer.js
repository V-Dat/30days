import "./ControlPlayer.css";

import Button from "../Button/Button.js";
import SeekBarControl from "../SeekBar/SeekBarControl";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ControlPlayer() {
  const audioElement = useRef();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);
  const listMusics = useSelector((state) => state.listMusicsReducer);

  const [show, setShow] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isInputSeeking, setIsInputSeeking] = useState(false);

  // const [isRotating, setIsRotating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentValueInput, setCurrentValueInput] = useState(0);
  const [newTimeInput, setNewTimeInput] = useState(0);
  const [duration, setDuration] = useState(0);
  const [src, setSrc] = useState("");

  const dispatch = useDispatch();
  const length = Number(listMusics.length) ? Number(listMusics.length) : 0;

  useEffect(() => {
    setSrc(audioCurrent.mp3);
    setCurrentTime(0);
    setCurrentValueInput(0);
    setNewTimeInput(0);
    if (audioCurrent.mp3 !== "") {
      setDuration(() => {
        return audioElement.current.duration === null
          ? 0
          : audioElement.current.duration;
      });
      audioElement.current.play();
    }
  }, [audioCurrent]);

  const handleClickNext = () => {
    if (isRepeat) {
      setCurrentTime(0);
      audioElement.current.play();
      return;
    }

    // setIsPlaying(true);
    const nextIndex =
      (audioCurrent.index + 1 + length + Math.floor(Math.random() * length)) %
      length;

    dispatch({
      type: "Next",
      payload: {
        ...listMusics[nextIndex],
        index: nextIndex,
      },
    });
    setSrc(audioCurrent.mp3);
  }; //done

  const handleClickPrev = () => {
    if (isRepeat) {
      setCurrentTime(0);
      audioElement.current.play();
      return;
    }

    // setIsPlaying(true);

    const randomNumber = Math.floor(Math.random() * length);
    const prevIndex =
      (audioCurrent.index - 1 + length + (isRandom ? randomNumber : 0)) %
      length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[prevIndex],
        index: Number(prevIndex),
      },
    });
    setSrc(audioCurrent.mp3);
  }; //done

  const handleClickPause = () => {
    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    // setIsPlaying(false);
    // setIsRotating(false);
    // hiển thị nút play
    setShow(false);
    // setIsPaused(true);
  }; //done

  const handleClickPlay = () => {
    if (audioElement.current.src === "") {
      dispatch({
        type: "Next",
        payload: {
          ...listMusics[0],
          index: 0,
        },
      });
      // setIsPlaying(true);
      // setIsRotating(true);
      return;
    }

    // setIsPlaying(true);
    // setIsRotating(true);
    //hiển thị nút pause
    setShow(true);
    // setIsPaused(false);
    audioElement.current.play();
  }; //done

  const handleToggleButtonRandom = () => {
    setIsRandom(!isRandom);
  }; //done

  const handleToggleButtonRepeat = () => {
    setIsRepeat(!isRepeat);
  }; //done

  const handleAudioEnded = () => {
    if (isRepeat) {
      return;
    }

    // setIsPlaying(true);
    const nextIndex =
      (audioCurrent.index + 1 + length + isRandom
        ? Math.floor(Math.random() * length)
        : 0) % length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[nextIndex],
        index: nextIndex,
      },
    });

    if (src !== "") {
      audioElement.current.play();
    }
  }; // done

  const handleStartPlaying = () => {
    setDuration(audioElement.current.duration);
    setShow(true);
  }; //done

  const handleAudioOnTimeUpdate = () => {
    setCurrentTime(audioElement.current.currentTime);
    setNewTimeInput(currentTime);
  };
  const handleSeekBarInput = (e) => {
    setCurrentValueInput(e.target.value);
    if (isInputSeeking === true) {
      setNewTimeInput(e.target.value);
    }
  };

  const handleSeekingDown = () => {
    if (audioCurrent.mp3 !== null) {
      setIsInputSeeking(true);
    }
  };

  const handleSeekingUp = () => {
    if (audioCurrent.mp3 !== null) {
      audioElement.current.currentTime = newTimeInput;
      setIsInputSeeking(false);
      setCurrentValueInput(newTimeInput);
    }
  };

  return (
    <div>
      <div className="player__control btn">
        <Button
          type="btn-repeat"
          icon={
            <i className={isRepeat ? "active fas fa-redo" : "fas fa-redo"}></i>
          }
          onClick={handleToggleButtonRepeat}
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
                onClick={handleClickPause}
              ></i>{" "}
              <i
                className={
                  show ? "hide fas fa-play icon-play" : "fas fa-play icon-play"
                }
                onClick={handleClickPlay}
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
          onClick={handleToggleButtonRandom}
          type="btn-random"
          icon={
            <i
              className={isRandom ? "active fas fa-random" : "fas fa-random"}
            ></i>
          }
        />
      </div>
      <div className="player__seekbar-control">
        <SeekBarControl
          currentValueInput={currentValueInput}
          currentTime={currentTime}
          duration={duration || 0}
          handleSeekBarInput={handleSeekBarInput}
          newTimeInput={newTimeInput}
          handleSeekingDown={handleSeekingDown}
          handleSeekingUp={handleSeekingUp}
          isInputSeeking={isInputSeeking}
        />
      </div>

      <div className="player__audio-control">
        <audio
          id="audio"
          className="audio"
          src={`${src}`}
          autoPlay={true}
          loop={isRepeat}
          ref={audioElement}
          onEnded={handleAudioEnded}
          onPlay={handleStartPlaying}
          onTimeUpdate={handleAudioOnTimeUpdate}
        ></audio>
      </div>
    </div>
  );
}

export default ControlPlayer;
