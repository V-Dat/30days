import "./SeekBarTimeUpdate.css";

function SeekBarTimeUpdate({
  percent,
  showProgress,
  handleSeekBarInput,
  seekBarInput,
  handleMouseEnter,
}) {
  return (
    <div className="seek__timeupdate">
      <input
        type="range"
        value={percent}
        step="1"
        min="0"
        max="100"
        style= {{ display: showProgress }} 
        ref={seekBarInput}
        onInput={(e) => handleSeekBarInput(e)}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
}

export default SeekBarTimeUpdate;
