import "./SkillDetail.scss";
import data from "../../../pages/data";
import { v4 as uuidv4 } from 'uuid';

export default function SkillDetail() {
  const skillDetail = data.about.skillDetail;
  return (
    <div
      className="skill-detail__content__detail"
      style={{ paddingRight: "1rem" }}
    >
      {skillDetail.map((detail) => (
        <div className="skill-detail__content__detail" key={uuidv4()}>
          <p className="name">{detail.name}</p>
          <span style={{ fontWeight: "normal", paddingLeft: "1rem" }}>
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
}

