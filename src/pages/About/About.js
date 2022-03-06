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
        <div className="left-page">
          <h1 className="cv"> COVER LETTER</h1>
          <div className="head-content">
            <div className="head-content__left">
              <h2 className="name">{about.name}</h2>
              <p className="birthday">{about.dayOfBirth}</p>
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
                  <i className="fa fa-map-marker"></i>
                  {about.location}
                </p>
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
              {about.education.map((e) => (
                <div key={e}>
                  <h2 className="education">
                    {" "}
                    <span>EDUCATION</span>
                  </h2>
                  <h4 className="school">{e.school}</h4>
                  <div className="major">{e.major}</div>
                  <i className="education-time">{e.time}</i>
                  <p className="gpa">{e.gpa}</p>
                </div>
              ))}
            </div>
            <div className="body-content__right">
              {about.work.map((e) => (
                <div key={e}>
                  <h2 className="work">
                    <span>Kinh Nghiệm</span>
                  </h2>
                  <h4 className="company working-time">{`${e.company} (${e.time})`}</h4>

                  {e.task.map((e) => (
                    <div key={e} className="task">
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* <div className='content-skill'> */}
          <div className="content-skill">
            <h2>
              <span>Kĩ Năng</span>
            </h2>
            {skill.map((e) => (
              <div key={e.value} className="skill">
                <div className="skill__name">{e.key}</div>
                <div className="skill__value">
                  <span> : </span>
                  {e.value}
                </div>
              </div>
            ))}
          </div>

          <div className="ceritficate">
            <h2>
              <span>Chứng Chỉ</span>
            </h2>
            {about.ceritficate.map((e) => (
              <div key={e} className="certificate__name">
                {e}
              </div>
            ))}
          </div>

          <div className="objective">
            <h2>
              <span>Mục Tiêu</span>
            </h2>
            {about.objective.map((e) => (
              <div key={e.key}>
                <div className="short-term">
                  <h3>{e.key}</h3>
                  {e.value.map((e) => (
                    <p key={e}>{e}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
