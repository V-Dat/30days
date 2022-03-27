import "./SeekBarControl.css";

import SeekBarTimeUpdate from "./SeekBarTimeUpdate";
import { useSelector, useDispatch } from "react-redux";

function SeekBarControl({ percent, setPercent, audioElement }) {
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleSeekTimeupdateInput = (e) => {
    if (!audioCurrent.isSeeking) {
      audioElement.current.currentTime =
        (audioElement.current.duration * e.target.value) / 100;
    }
      setPercent(e.target.value);
  };

  const handleSeekingDown = () => {
    //dispatch action seeking
    dispatch({ type: "Seeking", payload: { isSeeking: true } });
  };

  const handleSeekingUp = () => {
    dispatch({ type: "Seeking", payload: { isSeeking: false } });

    if(audioCurrent.mp3 !== null){
      audioElement.current.currentTime =
      (audioElement.current.duration * percent) / 100;
    }
  };

  return (
      <SeekBarTimeUpdate
        percent={percent}
        handleSeekingDown={handleSeekingDown}
        handleSeekingUp={handleSeekingUp}
        handleSeekTimeupdateInput={handleSeekTimeupdateInput}
        audioElement={audioElement}
      />
  );
}

export default SeekBarControl;
