import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function SeekBar({   audioElement  ,setShow }) {
  const audioCurrent = useSelector((state) => state.currentMusicReducer);
  const seekBarInput = useRef();

  useEffect(() => {

    const handleSeekBarUpdate = () => {
      const percent = (audioElement.current.currentTime / audioElement.current.duration) * 100;
      seekBarInput.current.value = percent;
    };
    const handleSeekBarInput = (e) => {
      audioElement.current.currentTime = (e.target.value / 100) * audioElement.current.duration;
    };


    seekBarInput.current.addEventListener("input", handleSeekBarInput);
    audioElement.current.addEventListener("timeupdate", handleSeekBarUpdate);
    return () => {
      audioElement.current.removeEventListener("timeupdate", handleSeekBarUpdate);
      seekBarInput.current.addEventListener("input", handleSeekBarInput);
    };
    
  }, [audioCurrent]);

  return (
    <div className="player__seekbar">
      <input
        id="progress"
        className="progress"
        type="range"
        defaultValue="0"
        step="1"
        min="0"
        max="100"
        ref={seekBarInput}
      />
    </div>
  );
}

export default SeekBar;
