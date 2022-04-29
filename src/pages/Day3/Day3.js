import "./index.scss";
import Dialog from "../../component/Day3/Dialog.js";
import SearchBox from "../../component/ReUse/SearchBox/SearchBox";
import Row from "../../component/ReUse/Row/Row";

import DayTemplate from "../DayTemplate/DayTemplate";
function Day3() {
  return (
    <DayTemplate background='day3' >
      <Row>
        <Row>
          <Dialog />
        </Row>
        <Row className="break">
          <SearchBox />
        </Row>
      </Row>
    </DayTemplate>
  );
}

export default Day3;
