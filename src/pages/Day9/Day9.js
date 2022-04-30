import "./index.scss";
import Title from "../../component/ReUse/Title/Title";
import Detail from "../../component/ReUse/Detail/Detail";
import Button from "../../component/ReUse/Button/Button";
import Row from "../../component/ReUse/Row/Row";
import InputComponent from "../../component/ReUse/InputComponent/InputComponent";
import { useRef, useState } from "react";
import DayTemplate from "../DayTemplate/DayTemplate";

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

function Day9() {

  const [inputPomodoro, setInputPomodoro] = useState(25 * 60)
  const [totalTimeInPomodoro, setTotalTimeInPomodoro] = useState(25 * 60)
  const [timeleft, setTimeleft] = useState(totalTimeInPomodoro)
  const [isCounting, setIsCounting] = useState(false)
  let idInterval = useRef(null);

  const handleClickStart = () => {
    if (isCounting) { return }
    setTotalTimeInPomodoro(totalTimeInPomodoro)
    setIsCounting(true)
    idInterval.current = setInterval(() => setTimeleft(prev => {
      if (prev === 1) {
        clearInterval(idInterval.current)
        setIsCounting(false)
        return prev === 0
      }
      return prev - 1
    }), 1000)
  }

  const handleResumeOrPause = () => {
    clearInterval(idInterval.current)
    setIsCounting(!isCounting)
    // if change state to coungting => create new idInterval.current => and run it
    if (!isCounting) { handleClickStart() }
  }

  const handleClickStop = () => {
    clearInterval(idInterval.current)
    setIsCounting(false)
    setTimeleft(inputPomodoro)
  }

  const handleStartCounting = (time) => {
    setInputPomodoro(time)
    clearInterval(idInterval.current)
    setTotalTimeInPomodoro(time)
    setTimeleft(time)
    setIsCounting(false)
    if (isCounting) { handleClickStart() }
  }


  const handleSet5Munites = () => {
    handleStartCounting(5 * 60);
  }

  const handleSet10Munites = () => {
    handleStartCounting(10 * 60);
  }

  const handleSet15Munites = () => {
    handleStartCounting(15 * 60);
  }

  const handleChange = (e) => {
    setInputPomodoro(e.target.value)
  }

  const handleClickSet = () => {
    clearInterval(idInterval.current)
    if (totalTimeInPomodoro === inputPomodoro) return
    setTimeleft(inputPomodoro)
  }

  return (
    <DayTemplate background='day9'>
        <Row className="row">
          <Title className="title col-12 display-1 pt-5">Podomoro App !</Title>
          <Detail className="col-12 text-center py-3 title display-1">
            <span >{toHHMMSS(timeleft)}</span>
          </Detail>
        </Row>

        <Row className="row justify-content-center text-center  buttons my-3">
          <InputComponent
            handleChange={handleChange}
            type="number"
            className="col-sm-9"
            placeholder="Input seconds"
          />
          <Button
            handleClick={handleClickSet}
            className="col-sm-3 button"
          >Set</Button>
        </Row>

        <Row className="row justify-content-between text-center mt-3 buttons my-5 ">
          <Button
            handleClick={handleSet5Munites}
            className="buton  col-sm-12 col-md-3 "
          >Set 5 Minutes</Button>
          <Button
            handleClick={handleSet10Munites}
            className="buton  col-sm-12 col-md-3 "
          >Set 10 Minutes</Button>
          <Button
            handleClick={handleSet15Munites}
            className="buton  col-sm-12 col-md-3 "
          >Set 15 Minutes</Button>
        </Row>

        <Row className="row justify-content-arround text-center mt-3 buttons pb-3">
          <Button className="buton col-sm-12 col-mx-3 " handleClick={handleClickStart}>Start</Button>
          <Button className="buton col-sm-12 col-mx-3 " handleClick={handleResumeOrPause}>{`${isCounting ? "Pause" : "Resume"}`}</Button>
          <Button className="buton col-sm-12 col-mx-3 " handleClick={handleClickStop}>Stop</Button>
        </Row>
    </DayTemplate>
  );
}

export default Day9;
