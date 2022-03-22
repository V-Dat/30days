import React, { useRef } from "react";
import Button from "./Button";
import SeekBar from "./SeekBar";
import { useDispatch, useSelector } from "react-redux";
function ControlPlayer({ musics }) {
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

    console.log(audioCurrent.isPlaying)
    console.log(buttonPlay.current)
    console.log(buttonPause.current)
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
    buttonPause.current.classList.toggle("show");
    buttonPlay.current.classList.toggle("hide");
    audioElement.current.duration > 0
      ? audioElement.current.pause()
      : audioElement.current.play();

    console.log("handlePause");
  };

  const handlePlay = () => {
    audioCurrent.isPlaying = true;
    audioElement.current.src !== null
      ? audioElement.current.play()
      : dispatch({ type: "Next", payload: { ...musics[0], index: 0 } });
    buttonPlay.current.classList.toggle("hide");
    buttonPause.current.classList.toggle("show");
    console.log("handlePlay");
  };

  const handleRandom = () => {
    buttonRandom.current.classList.toggle("active");
    audioCurrent.isRandom === true
      ? (audioCurrent.isRandom = false)
      : (audioCurrent.isRandom = true);
    console.log(audioCurrent);
  };

  const handleRepeat = () => {
    buttonRepeat.current.classList.toggle("active");
    audioCurrent.isRepeat === true
      ? (audioCurrent.isRepeat = false)
      : (audioCurrent.isRepeat = true);
    console.log(audioCurrent);
  };

  return (
    <>
      <div className="player__control btn">
        <Button
          type="btn-repeat"
          icon={<i className="fas fa-redo" ref={buttonRepeat} ></i>}
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
                className="fas fa-pause icon-pause"
                onClick={handlePause}
                ref={buttonPlay}
              ></i>{" "}
              <i
                className="fas fa-play icon-play"
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
          icon={<i className="fas fa-random" ref={buttonRandom}></i>}
        />
      </div>
      <div>
        <SeekBar 
        music={musics} 
        buttonNext={buttonNext} 
        audioElement={audioElement}
        buttonPause={buttonPause}
        buttonPlay={buttonPlay}
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
