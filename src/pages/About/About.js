import "./index.css";
import "../../assets/css/grid.css";
import data from '../data'
import { useState , useEffect} from "react";

function About({onClick}) {
const about = data.about
console.log('Aboute re-render')

  useEffect(() => onClick(),[])

  return (
    <div className="about">
      <h2>THIS IS ABOUT PAGE</h2>
      <div className="name">Xin chào mọi người tôi tên là: {about.name}</div>
      {/* <div className="age">Tôi {about.age} tuổi!</div> */}
      <div className="love">Tôi thích {about.love}</div>
    </div>
  );
}

export default About;
