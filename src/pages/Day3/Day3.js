import "./index.scss";
import "../../assets/css/grid.css";
import Dialog from "../../component/Day3/Dialog.js";
import SearchBox from "../../component/ReUse/SearchBox/SearchBox";
function Day3() {
  console.log("Day3: render....");

  return (
    <div className="day3">
      <Dialog />
      <div className="break"> </div>
      <SearchBox />
    </div>
  );
}

export default Day3;
