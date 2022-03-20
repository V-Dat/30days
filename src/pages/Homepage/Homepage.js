import "./index.css";
import "../../assets/css/grid.css";

import data from "../data.js";

import { memo } from "react";
import Day from "../../component/Day";

function Content({ onClick }) {
  const dayList = data.dayList;

  console.log(" homepage re-render ");

  return (
    <>
      <div className="content grid wide">
        <div className="row" onClick={(e) => onClick(e)}>
          {dayList.map((day) => (
              <Day data={day}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(Content);
