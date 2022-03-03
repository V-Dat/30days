import "./index.css";
import "../../assets/css/grid.css";
import data from "../data";
import { useState, useEffect } from "react";

function About({ onClick }) {
  const about = data.about;
  const skill = data.about.skill;
  console.log("Aboute re-render");

  useEffect(() => onClick(), []);

  return (
    <div className="grid wide">
      <div className="row"></div>
      <div className="about col l-12 m-12 c-12">
        <h1 className="cv"> COVER LETTER</h1>
        <div className="head-content">
          <div className="head-content__left">
            <h2 className="name">{about.name}</h2>
            <p className="birthday">{about.dayOfBirth}</p>
            <div className="contact">
              <span className="contact__email"><i className="fa-solid fa-envelope"></i>{about.email}</span>
              <span className="contact__phone"><i className="fa fa-phone"></i>{about.phone}</span>
              <span className="contact__location"><i className="fa fa-map-marker"></i>{about.location}</span>
            </div>
          </div>

          <div className="head-content__right">
            <div className="image">
              <img src={about.avatar} alt={about.avatar} />
            </div>
          </div>
        </div>

        <div className="body-content">
          <div className="body-content__left">
            {about.education.map(e => (
              <div key={e}>
            <h2 className="education" >EDUCATION</h2>
            <div className="school">{e.school}</div>
            <i className="education-time">{e.time}</i>
            <p className="gpa">{e.gpa}</p>
              </div>
            ))}
            </div>
          <div className="body-content__right">
          {about.work.map(e => (
              <div key={e}>
            <h2 className="work">WORK EXPERIENCES</h2>
            <div className="company working-time">{`${e.company} (${e.time})`}</div>

            {e.task.map( e => (
            <div key={e} className="task">
              <p>{e}</p>
            </div>
            ))}
            </div>
            ))}
          </div>
        </div>

        <div className='content-skill'>
          <h2>Kĩ Năng</h2>
          <div className='skill'>
          <div className="skill__left">
            {skill.map((e) => (
              <p key={Math.random()*2}>{e.key}</p>
            ))}
          </div>
          <div className="skill__right">
            {skill.map((e) => (
              <p key={Math.random()*4} >{e.value}</p>
            ))}
          </div>
          </div>
        </div>

        <div className="objective">
          <h2>Mục Tiêu</h2>
          {about.objective.map( (e) => (
            <div key={e.key}>
            <div className="short-term">
                <h3>{e.key}</h3>
                {e.value.map(e => (
                <p key={e}>{e}</p>
                ))}
            </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default About;
