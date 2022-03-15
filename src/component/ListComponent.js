import "./listComponent.css";
import { memo } from "react";

function ListComponent({ data }) {
  return (
    <div className="listComponent">
      <h2 class="listComponent__title">
        <span>{data[0].title}</span>
      </h2>

      <div class="list-skill listComponent__list">
        {data.map((skill) => {
        if(skill.icon !== '') {return (
          <div key={skill.key} class="list-skill__item listComponent__list">
            <span dangerouslySetInnerHTML={{ __html: `${skill.icon}` }} />
            <span>{`${skill.icon}` === "" ? null : skill.key}</span>
          </div>)}else{
            return ''
          }
        })}
      </div>
    </div>
  );
}

export default memo(ListComponent);
