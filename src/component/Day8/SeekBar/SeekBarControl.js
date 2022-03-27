import "./SeekBarControl.css";

import SeekBarTimeUpdate from "./SeekBarTimeUpdate";
import { useSelector, useDispatch } from "react-redux";

function SeekBarControl({
  percent,
  setPercent,
  audioElement,
  setMusicCurrentTime,
  musicDurationTime,
  musicCurrentTime,
}) {
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleSeekBarInput = (e) => {
    //new code
    // if (!audioCurrent.isSeeking) {
    //   audioElement.current.currentTime =
    //     (musicDurationTime * e.target.value) / 100;
    // }
    // setPercent(e.target.value);
    // }

    //old code
    if (!audioCurrent.isSeeking) {
      audioElement.current.currentTime =
        (audioElement.current.duration * e.target.value) / 100;
    }
    setPercent(e.target.value);
  };

  const handleSeekingDown = () => {
    //dispatch action seeking
    if (audioCurrent.mp3 !== null) {
      dispatch({ type: "Seeking", payload: { isSeeking: true } });
    }
  };

  const handleSeekingUp = () => {
    // new code
    // if (audioCurrent.mp3 !== null) {
    //   setMusicCurrentTime((musicDurationTime * percent) / 100);
    //   audioElement.current.currentTime = musicCurrentTime;
    //   console.log(musicCurrentTime);
    // }
    // dispatch({ type: "Seeking", payload: { isSeeking: false } });

    // old code
    if (audioCurrent.mp3 !== null) {
      audioElement.current.currentTime =
        (audioElement.current.duration * percent) / 100;
    }

    dispatch({ type: "Seeking", payload: { isSeeking: false } });
  };

  return (
    <SeekBarTimeUpdate
      percent={percent}
      handleSeekingDown={handleSeekingDown}
      handleSeekingUp={handleSeekingUp}
      handleSeekBarInput={handleSeekBarInput}
      audioElement={audioElement}
    />
  );
}

export default SeekBarControl;
