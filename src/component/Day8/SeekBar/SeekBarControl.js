import SeekBarTimeUpdate from "./SeekBarTimeUpdate";
import SeekProgress from "./SeekBarInput";

import { useRef, useState } from "react";

function SeekBarControl({
  percent,
  handleSeekBarInput,
  audioElement,
}) {
  const seekBarInput = useRef();
  const seekProgress = useRef();

  const [showProgress, setShowProgress] = useState("inline-block");
  const [showSeekProgress, setShowSeekProgress] = useState("none");
  const [seekPercent, setSeekPercent] = useState(0);

  const handleMouseEnter = () => {
    
    setShowProgress("inline-block");
    setShowSeekProgress("inline-block");
    setSeekPercent(percent);

    console.log(showProgress);
  };
  const handleMouseLeave = () => {
    setShowProgress("inline-block");
    setShowSeekProgress("none");
  };

  const handleSeekProgressInput = (e) => {
    setSeekPercent(e.target.value);
  };

  const handleMouseUp = () => {
    audioElement.current.currentTime =
      (audioElement.current.duration * seekPercent) / 100;
    setShowProgress("inline-block");
    
    //sau khi tua => tu dong play    
    audioElement.current.play();
  };

  return (
    <div className="seekbar_control seek">
      <SeekBarTimeUpdate
        percent={percent}
        showProgress= {showProgress}
        ref={seekBarInput}
        // handleSeekBarInput={handleSeekBarInput}
        // handleMouseUp={handleMouseUp}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <SeekProgress
        handleSeekProgressInput={handleSeekProgressInput}
        handleMouseUp={handleMouseUp}
        handleMouseLeave={handleMouseLeave}
        showSeekProgress={showSeekProgress }
        seekProgress={seekProgress}
        seekPercent={seekPercent}
      />
    </div>
  );
}

export default SeekBarControl;
