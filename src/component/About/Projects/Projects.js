import "./Projects.scss";
import Child from "../../ReUse/Child/Child";
import Detail from "../../ReUse/Detail/Detail";
import Content from "../../ReUse/Content/Content";
import LinkComponent from "../../ReUse/LinkComponent/LinkComponent";
import Title from "../../ReUse/Title/Title";
import SlideShow from "../../SlideShow/SlideShow";
import { v4 as uuidv4 } from 'uuid';

export default function Projects({ listProject }) {
  return (
    <div className="list-project">
      {listProject.map((project) => (
        <Child key={uuidv4()} className="project">
          <Title title={project.title} />
          <LinkComponent text="Nhấn vào đây để xem web" href={project.link} />
          <Content className="slider">
            <SlideShow listImage={project.listImage} />
            <div className="slide-description">
              <Detail>
                <div className="slide-description__left">
                  <h3> Mô Tả </h3>
                  {project.projectDescription.map((description) => (
                    <p key={uuidv4()}>{description}</p>
                  ))}
                </div>
              </Detail>
              <Detail>
                <div className="slide-description__right">
                  <h3> Công Nghệ</h3>
                  {project.technologies.map((description) => (
                    <p key={uuidv4()}>{description}</p>
                  ))}
                </div>
              </Detail>
            </div>
          </Content>
        </Child>
      ))}
    </div>
  );
}
