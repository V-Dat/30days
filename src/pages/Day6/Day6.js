import "./index.scss";
import { useState, useEffect } from "react";
import Row from "../../component/ReUse/Row/Row";
import DayTemplate from "../DayTemplate/DayTemplate";
import BroadTime from "../../component/Day6/BroadTime";
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
    <DayTemplate background='day6' >
      <Row className='row'>
        <BroadTime
          timezone='Viet Nam Time'
          timeLocation={currentTime}
        />
        <BroadTime
          timezone='United States Time'
          timeLocation={currentTimeUS}
        />
        <BroadTime
          timezone='Australia Time'
          timeLocation={currentTimeAUS}
        />
        <BroadTime
          timezone='British English Time'
          timeLocation={currentTimeGB}
        />
        <BroadTime
          timezone='Russia Time Time'
          timeLocation={currentTimeRU}
        />
        <BroadTime
          timezone='Korea Time'
          timeLocation={currentTimeKR}
        />

        <BroadTime
          timezone='Japan Time'
          timeLocation={currentTimeJP}
        />

        <BroadTime
          timezone='Indonesia Time'
          timeLocation={currentTimeIND}
        />
        <BroadTime
          timezone='HongKong Time'
          timeLocation={currentTimeHK}
        />
      </Row>
    </DayTemplate>
  );
}
