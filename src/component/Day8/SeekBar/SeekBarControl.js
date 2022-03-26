import SeekBarTimeUpdate from "./SeekBarTimeUpdate";
import SeekBarProgress from "./SeekBarProgress";

import {  useState } from "react";

function SeekBarControl({
  percent,
  audioElement,
}) {

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


  const handleSeekTimeupdateInput = (e) => {
    audioElement.current.currentTime =
      (audioElement.current.duration * e.target.value) / 100;
  };



  return (
    <div className="seekbar_control seek">
      <SeekBarTimeUpdate
        percent={percent}
        showProgress= {showProgress}

        handleSeekTimeupdateInput={handleSeekTimeupdateInput}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <SeekBarProgress
        seekPercent={seekPercent}
        showSeekProgress={showSeekProgress }
        
        handleMouseUp={handleMouseUp}
        handleMouseLeave={handleMouseLeave}
        handleSeekProgressInput={handleSeekProgressInput}
      />
    </div>
  );
}

export default SeekBarControl;
