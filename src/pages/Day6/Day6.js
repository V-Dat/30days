import "./index.scss";
import { useState, useEffect } from "react";
import Content from "../../component/ReUse/Content/Content";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
var newDateOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export default function Day6() {
  const [currentTime, setCurrentTime] = useState();
  const [currentTimeUS, setCurrentTimeUS] = useState();
  const [currentTimeAUS, setCurrentTimeAUS] = useState();
  const [currentTimeGB, setCurrentTimeGB] = useState();
  const [currentTimeKR, setCurrentTimeKR] = useState();
  const [currentTimeRU, setCurrentTimeRU] = useState();
  const [currentTimeJP, setCurrentTimeJP] = useState();
  const [currentTimeHK, setCurrentTimeHK] = useState();
  const [currentTimeIND, setCurrentTimeIND] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleString("en-US", newDateOptions));
      setCurrentTimeUS(date.toLocaleString("vi-VN", newDateOptions));
      setCurrentTimeAUS(date.toLocaleString("en-AU", newDateOptions));
      setCurrentTimeGB(date.toLocaleString("en-GB", newDateOptions));
      setCurrentTimeKR(date.toLocaleString("ko-KR", newDateOptions));
      setCurrentTimeRU(date.toLocaleString("ru-RU", newDateOptions));
      setCurrentTimeKR(date.toLocaleString("ko-KR", newDateOptions));
      setCurrentTimeHK(date.toLocaleString("zh-HK", newDateOptions));
      setCurrentTimeJP(date.toLocaleString("ja-JP", newDateOptions));
      setCurrentTimeIND(date.toLocaleString("id-ID", newDateOptions));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <Content className="day6 background-color">
      <Container>
        <Row className="row">
          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">Viet Nam Time</h3>
            <div className="timer__current">{currentTime}</div>
          </div>
          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">United States Time</h3>
            <div className="timer__current">{currentTimeUS}</div>
          </div>
          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">Australia Time</h3>
            <div className="timer__current">{currentTimeAUS}</div>
          </div>
          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">British English Time</h3>
            <div className="timer__current">{currentTimeGB}</div>
          </div>
          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">Korea Time</h3>
            <div className="timer__current">{currentTimeKR}</div>
          </div>
          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">Russia Time</h3>
            <div className="timer__current">{currentTimeRU}</div>
          </div>

          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">Japan Time</h3>
            <div className="timer__current">{currentTimeJP}</div>
          </div>

          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">Indonesia Time</h3>
            <div className="timer__current">{currentTimeIND}</div>
          </div>

          <div className="timer p-3 col-6 col-md-4 col-lg-3 col-xl-2">
            <h3 className="timer__title">HongKong Time</h3>
            <div className="timer__current">{currentTimeHK}</div>
          </div>
        </Row>
      </Container>
    </Content>
  );
}
