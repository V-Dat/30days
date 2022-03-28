import "./SeekBarControl.css";

import SeekBarTimeUpdate from "./SeekBarTimeUpdate";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function SeekBarControl({ percent, setPercent, audioElement }) {
  const dispatch = useDispatch();
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleSeekBarInput = (e) => {
    // nếu mà đang input thì sửa lại percent & thời gian hiện tại ( đang input tức là đang seeking )
    //  tuy nhiên không được apply thời gian hiện tại cho thẻ audio

    if (audioCurrent.isSeeking) {
      dispatch({
        type: "setCurrentPercent",
        payload: { currentPercent: Number(e.target.value) },
      });

      dispatch({
        type: "setMusicCurrentTime",
        payload: {
          musicCurrentTime: Number(
            (e.target.value * audioCurrent.musicDuration) / 100
          ),
        },
      });
    }

    // nếu mà không đang input thì có làm gì không ?
    // Không tại vì : audio vẫn chạy khi chúng ta input ( điều kiện là nếu seeking thì sẽ cập nhật thời gian )
    // tuy nhiên sẽ không cập nhật percent => sẽ không bị kéo lại trong lúc input__place

  };

  const handleSeekingDown = () => {
    //dispatch action seeking
    if (audioCurrent.mp3 !== null) {
      dispatch({ type: "Seeking", payload: { isSeeking: true } });
    }
  };

  const handleSeekingUp = () => {
    dispatch({ type: "Seeking", payload: { isSeeking: false } }) 

    if (audioCurrent.mp3 !== null) {
      dispatch({
        type: "setMusicCurrentTime",
        payload: { musicCurrentTime: Number((audioCurrent.currentPercent * audioCurrent.musicDuration) / 100) },
      });
      audioElement.current.currentTime = audioCurrent.musicCurrentTime;
    }

  };

  return (
    <SeekBarTimeUpdate
      percent={percent}
      handleSeekingDown={handleSeekingDown}
      handleSeekingUp={handleSeekingUp}
      handleSeekBarInput={handleSeekBarInput}
      audioElement={audioElement}
    />
  );
}

export default SeekBarControl;
