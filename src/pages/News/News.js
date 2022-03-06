import "./index.css";
import "../../assets/css/grid.css";
import Day1 from "../Day1/Day1";
import Day2 from "../Day2/Day2";
import Day3 from "../Day3/Day3";
import Content from "../../component/Content/Content";
import { useState, useEffect } from "react";

function News({ onClick }) {
  useEffect(() =>onClick(),[])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("news re-render");

  const handleClick = () => {
    console.log(email ,name);
  };

  return (
    <div className="new">
      <div style={{ padding: 32 }}>
        <input  onChange={(e) => setName(e.target.value)} />
        <input  onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleClick}>Change</button>
      </div>
    </div>
  );
}

export default News;
