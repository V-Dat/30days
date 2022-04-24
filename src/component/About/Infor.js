import { v4 as uuidv4 } from 'uuid';
import "./infor.css";
import ListComponent from "../ListComponent";
export default function Infor({ data }) {
  return (
    <>
      {data.education.map((e) => (
        <div key={uuidv4()} className="education">
          <h2 className="education__title">
            <span>Học Vấn</span>
          </h2>
          <div className="school">
            <div className="school__image">
              <img src={data.tdtu_icon} />
            </div>
            <span className="school__name">{e.school}</span>
          </div>
          <div className="major">
            {e.major}
            <i className="education-time"> {`( ${e.time} )`}</i>
          </div>
          <p className="gpa">{e.gpa}</p>
        </div>
      ))}

      <ListComponent data={data.skill} />

      <div className="content-skill">
        <h2>
          <span>Kĩ Năng</span>
        </h2>
        {data.skill.map((e) => (
          <div key={uuidv4()} className="skill">
            <div className="skill__name">{e.key}</div>
            <div className="skill__value">
              <span> {e.icon !== "" ? ":" : null} </span>
              {e.value}
            </div>
          </div>
        ))}
      </div>

      {data.work.map((e) => (
        <div key={uuidv4()} className="work">
          <h2>
            <span>Kinh Nghiệm</span>
          </h2>
          <p className="company working-time">{`${e.company} (${e.time})`}</p>

          {e.task.map((e) => (
            <div key={uuidv4()} className="task">
              <p>{e}</p>
            </div>
          ))}
        </div>
      ))}

      <div className="ceritficate">
        <h2>
          <span>Chứng Chỉ</span>
        </h2>
        {data.ceritficate.map((e) => (
          <div key={uuidv4()} className="certificate__name">
            {e}
          </div>
        ))}
      </div>
    </>
  );
}
