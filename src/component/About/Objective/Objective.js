import "./Objective.scss";
import Title from "../../ReUse/Title/Title";
import Child from "../../ReUse/Child/Child";
import Content from "../../ReUse/Content/Content";
import IconLabel from "../../ReUse/IconLabel/IconLabel";

export default function Objective({ about }) {
  return (
    <div className="list-objective">
      <Child className="objective">
        <Title title="Muốn Học Trong Năm 2022" />
        <Content className="list-items">
          {about.objectiveSkill.map((item) => (
            <IconLabel key={item.text} className="item">
              <i className={item.iconClassName}></i>
              <p>{item.text}</p>
            </IconLabel>
          ))}
        </Content>
      </Child>
      <Child className="objective">
        <Title title="Mục Tiêu" />
        <Content>
          <>
            {about.objective.map((obj) => (
              <div key={obj.key}>
                <h3>{obj.key}</h3>
                {obj.value.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </div>
            ))}
          </>
        </Content>
      </Child>
    </div>
  );
}

