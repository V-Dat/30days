import { useSelector } from "react-redux";
import "./SeekBarTimeUpdate.css";

function SeekBarTimeUpdate({
  percent,
  handleSeekBarInput,
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
          : new Date(audioElement.current.currentTime * 1000)
              .toISOString()
              .slice(14, 19)}
      </label>
      <input
        type="range"
        value={percent}
        step="1"
        min="0"
        max="100"
        onInput={(e) => handleSeekBarInput(e)}
        onMouseDown={handleSeekingDown}
        onMouseUp={handleSeekingUp}
      />
      <label htmlFor="">
        {audioCurrent.index !== -1
          ? new Date(audioCurrent.musicDuration * 1000)
              .toISOString()
              .slice(14, 19)
          : "00:00"}
      </label>
    </div>
  );
}

export default SeekBarTimeUpdate;
