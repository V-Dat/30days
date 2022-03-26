import "./SeekBarInput.css";

import React from "react";

function SeekBarInput({
  handleSeekProgressInput,
  handleMouseUp,
  handleMouseLeave,
  seekPercent,
  showSeekProgress,
}) {
  return (
    <div className="seek__progress ">
      <input
        type="range"
        step="1"
        min="0"
        max="100"
        style={{ display: showSeekProgress }}
        value={seekPercent}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onInput={(e) => handleSeekProgressInput(e)}
      />
    </div>
  );
}

export default SeekBarInput;
