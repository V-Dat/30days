import "./SeekBar.css";

import { useRef } from "react";

function SeekBar({ audioElement, percent }) {
  const seekBarInput = useRef();

  const handleSeekBarInput = (e) => {
    audioElement.current.currentTime =
      (e.target.value / 100) * audioElement.current.duration;
  };

  return (
    <div className="player__seekbar">
      <input
        id="progress"
        className="progress"
        type="range"
        value={percent}
        step="1"
        min="0"
        max="100"
        ref={seekBarInput}
        onInput={(e) => handleSeekBarInput(e)}
      />
    </div>
  );
}

export default SeekBar;
