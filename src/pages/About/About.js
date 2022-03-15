import "./index.css";
import "../../assets/css/grid.css";
import data from "../data";
// import Infor from "../../component/About/Infor.js";
import Infor from "../../component/About/Infor";
import Objective from "../../component/About/Objective";
import Project from "../../component/About/Project";

import { useState, useEffect } from "react";

function About({ onClick }) {
  const about = data.about;
  const skill = data.about.skill;
  console.log("Aboute re-render");

  const [infor, setInfor] = useState(true);
  const [project, setProject] = useState(false);
  const [objective, setObjective] = useState(false);
  const handleShowInfor = () => {
    setInfor(true);
    setProject(false);
    setObjective(false);
  };
  const handleShowProJect = () => {
    setProject((prev) => 
    {if(prev === true){ 
      setInfor(true);
      return false
    }else{ 
      setInfor(false);
      setObjective(false);
      return true}});
  };

  const handleShowObjective = () => {
    setObjective((prev) =>
    {if(prev === true){ 
      setInfor(true);
      return false
    }else{ 
      setInfor(false);
      setProject(false);
      return true}});
  };

  useEffect(() => onClick(), []);

  return (
    <div className="grid wide">
      <div className="row"></div>
      <div className="about col l-12 m-12 c-12">
        <div className="left-page">
          <br></br>
          <div className="head-content">
            <div className="head-content__left">
              <div className="image">
                <img src={about.avatar} alt={about.avatar} />
              </div>
            </div>

            <div className="head-content__right">
              <h2 className="name">{about.name}</h2>
              <p className="birthday">{about.dayOfBirth}</p>
              <p className="description">{about.description}</p>


              <div className="contact">
                <p className="contact__email">
                  <i className="fa-solid fa-envelope"></i>
                  {about.email}
                </p>
                <p className="contact__phone">
                  <i className="fa fa-phone"></i>
                  {about.phone}
                </p>
                <p className="contact__location">
                <i class="fas fa-map"></i>
                  {about.location}
                </p>
                <a className="contact__github" href={ about.github}>
                <i className="fab fa-github"></i>
                GitHub
                </a>
              </div>


            </div>
          </div>
          <div className="body-content">
            <div className="body-content__left">
              <div className="education" onClick={handleShowInfor}>
                <i className="fas fa-address-card"></i><span>SƠ LƯỢC VỀ BẢN THÂN</span> 
              </div>
              <div className="project" onClick={handleShowProJect}>
                <i className="fas fa-user-check"></i><span>DỰ ÁN CÁ NHÂN</span> 
              </div>
              <div className="objective" onClick={handleShowObjective}>
                
                <i className="fas fa-layer-group"></i><span>ĐỊNH HƯỚNG PHÁT TRIỂN</span> 
              </div>
            </div>
          
            <div className="body-content__right">
              {infor && <Infor data={about} />}
              {objective && <Objective data={about} />}
              {project && <Project data={about.project} />}
            </div>
          </div>

          {/* <div className='content-skill'> */}



        </div>
      </div>
    </div>
  );
}

export default About;
