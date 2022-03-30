import "./SeekBarControl.css";
import "./SeekBarTimeUpdate.css";

import { useSelector } from "react-redux";

function SeekBarControl({
  duration,
  handleSeekBarInput,
  handleSeekingDown,
  handleSeekingUp,
  currentValueInput,
  currentTime,
  isInputSeeking,
}) {
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  return (
    <div className="seek__timeupdate">
      <label htmlFor="">
        {audioCurrent.index === -1
          ? "00:00"
          : isInputSeeking
          ? toHHMMSS(currentValueInput)
          : toHHMMSS(currentTime)}
      </label>
      <input
        type="range"
        value={isInputSeeking ? currentValueInput : currentTime}
        step="1"
        min="0"
        max={`${duration}`}
        onInput={(e) => handleSeekBarInput(e)}
        onMouseDown={handleSeekingDown}
        onMouseUp={handleSeekingUp}
      />
      <label htmlFor="">
        {audioCurrent.index === -1 ? "00:00" : toHHMMSS(duration)}
      </label>
    </div>
  );
}

export default SeekBarControl;
var toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};
