import "./ControlPlayer.css";

import Button from "../Button/Button.js";
import SeekBarControl from "../SeekBar/SeekBarControl";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ControlPlayer() {
  const audioElement = useRef();
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);
  const listMusics = useSelector((state) => state.listMusicsReducer);
  const length = Number(listMusics.length) ? Number(listMusics.length) : 0;

  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(false);
  // const [musicCurrentTime, setMusicCurrentTime] = useState(0);
  // const [musicDurationTime, setMusicDurationTime] = useState();

  // useEffect(() => {
  //   setMusicDurationTime(audioElement.current.duration);
  // }, [audioCurrent]);

  const handleReloadCurrentMusic = () => {
    audioElement.current.currentTime = 0;
  };

  const handleClickNext = () => {
    if (audioCurrent.isRepeat) {
      handleReloadCurrentMusic();
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

    const nextIndex = (audioCurrent.index + 1 + length) % length;
    dispatch({
      type: "Next",
      payload: {
        ...listMusics[nextIndex],
        isPlaying: true,
        index: nextIndex,
      },
    });

    if (audioElement.current !== undefined && audioElement.current.src !== "") {
      audioElement.current.play();
    }
  }; //done

  const handleClickPrev = () => {
    // Mỗi khi play/pause => mặc định audio luôn play và nút pause được show [event onPlaying]
    if (audioCurrent.isRepeat) {
      handleReloadCurrentMusic();
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
  }; //done

  const handleClickPause = () => {
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

    // hiển thị nút play
    setShow(false);
  }; //done

  const handleClickPlay = () => {
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

    //hiển thị nút pause
    setShow(true);
    audioElement.current.play();
  }; //done

  const handleToggleButtonRandom = () => {
    dispatch({ type: "Random", payload: { isRandom: !audioCurrent.isRandom } });
  }; //done

  const handleToggleButtonRepeat = () => {
    dispatch({ type: "Repeat", payload: { isRepeat: !audioCurrent.isRepeat } });
  }; //done

  const handleAudioEnded = () => {
    handleClickNext();
  }; // cần sửa lại

  const handleStartPlaying = () => {
    dispatch({ type: "setMusicDuration", payload: {musicDuration : audioElement.current.duration}})
    setShow(true);
  }; //done

  const handleAudioOnTimeUpdate = () => {
    // code mới (bị delay seekbar input)
    // if (!audioCurrent.isSeeking) {
    //   setMusicCurrentTime(audioElement.current.currentTime);
    //   setPercent((musicCurrentTime / musicDurationTime) * 100);
    // }

    // code Cũ
    if (!audioCurrent.isSeeking) {
      setPercent(
        (audioElement.current.currentTime / audioElement.current.duration) * 100
      );
    }
  };
  //done audioElement.current.currentTime quan ly vao state => done

  return (
    <>
      <div className="player__control btn">
        <Button
          type="btn-repeat"
          icon={
            <i
              className={
                audioCurrent.isRepeat ? "active fas fa-redo" : "fas fa-redo"
              }
            ></i>
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
              className={
                audioCurrent.isRandom ? "active fas fa-random" : "fas fa-random"
              }
            ></i>
          }
        />
      </div>

      <div className="player__seekbar-control">
        <SeekBarControl
          audioElement={audioElement}
          percent={percent || 0}
          setPercent={setPercent}
          // setMusicCurrentTime={setMusicCurrentTime}
          // musicDurationTime={musicDurationTime}
          // musicCurrentTime={musicCurrentTime}
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
          onPlay={handleStartPlaying}
          onTimeUpdate={handleAudioOnTimeUpdate}
          seeking={`${audioCurrent.isSeeking}`}
        ></audio>
      </div>
    </>
  );
}

export default ControlPlayer;
