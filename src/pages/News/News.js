import "./index.css";
import "../../assets/css/grid.css";
import { useState , useEffect} from "react";
const about = {
  name: 'Văn Đạt',
  age: 24,
  favorite: 'Travelling',
  love: 'Money'
}

function News({onClick}) {
  useEffect(() => onClick(),[])
  console.log('news re-render')
  return (
    <div className="about  ">
      <h2>THIS IS NEWS PAGE</h2>
    </div>
  );
}

export default News;
