import { v4 as uuidv4 } from 'uuid';
import Child from "../../ReUse/Child/Child";
import Title from "../../ReUse/Title/Title";
import ImageComponent from "../../ReUse/ImageComponent/ImageComponent";
import Content from "../../ReUse/Content/Content";
import Text from "../../ReUse/Text/Text";
import "./Infor.scss";
import IconLabel from "../../ReUse/IconLabel/IconLabel";
import Certificate from "./Certificate";
import SkillDetail from "./SkillDetail";

export default function Infor({ about }) {
  const edu = about.education;
  return (
    <>
      <Child className="education">
        <Title title="Học Vấn" className="education__title" />
        <Content className="education__content">
          <ImageComponent
            className="school__image"
            textClassName="school__text"
            src={edu.tdtu_icon}
          >
            <span className="school__name">{edu.school}</span>
          </ImageComponent>
          <Text className="major">
            <p className="major__name">
              {edu.major}
              <i className="major__time"> {`( ${edu.time} )`}</i>
            </p>
            <p className="major__gpa">{edu.gpa}</p>
          </Text>
        </Content>
      </Child>

      <Child className="skill">
        <Title title="Ngôn ngữ lập Trình/ FrameWork" className="skill__title" />
        <Content className="skill__content list-items ">
          {about.skill.map((item) => (
            <IconLabel key={uuidv4()} className="item">
              <i className={item.iconClassName}></i>
              <span>{item.text}</span>
            </IconLabel>
          ))}
        </Content>
      </Child>

      <Child className="skill-detail">
        <Title title="Kỹ Năng" className="skill-detail__title"></Title>
        <Content className="skill-detail__content">
          <SkillDetail />
        </Content>
      </Child>

      <Child className="work">
        <Title title="Kinh Nghiệm" className="work__title" />
        {about.work.map((work) => (
          <Content key={uuidv4()} className="work__content">
            <i
              style={{ fontWeight: "670" }}
              className="work-content__company"
            >{`${work.company} (${work.time})`}</i>
            {work.task.map((task) => (
              <p className="work-content__task" key={uuidv4()}>
                {task}
              </p>
            ))}
          </Content>
        ))}
      </Child>

      <Child className="ceritficate">
        <Title title="Chứng chỉ" className="ceritficate__title" />
        <Content className="ceritficate__content">
          <Certificate />
        </Content>
      </Child>
    </>
  );
}
