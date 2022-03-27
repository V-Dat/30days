import { useSelector } from "react-redux";
import "./SeekBarTimeUpdate.css";

function secondsToHms(d) {
  if (d === undefined) {
    return;
  }
  d = Number(d);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);
  var mDisplay = 10 > m > 0 ? "0" + m + ":" : "0:";
  var sDisplay = 10 > s > 0 ? "0" + s + "" : s;
  return mDisplay + sDisplay;
}

function SeekBarTimeUpdate({
  percent,
  handleSeekTimeupdateInput,
  handleSeekingDown,
  handleSeekingUp,
  audioElement,
}) {
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  return (
    <div className="seek__timeupdate">
      <label htmlFor="">
        {audioCurrent.index === -1
          ? "00:00"
          : secondsToHms(audioElement.current.currentTime)}
      </label>
      <input
        type="range"
        value={percent}
        step="1"
        min="0"
        max="100"
        onChange={(e) => handleSeekTimeupdateInput(e)}
        onMouseDown={handleSeekingDown}
        onMouseUp={handleSeekingUp}
      />
      <label htmlFor="">
        {audioCurrent.index === -1
          ? "00:00"
          : secondsToHms(audioElement.current.duration)}
      </label>
    </div>
  );
}

export default SeekBarTimeUpdate;
