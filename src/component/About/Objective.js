import "./objective.css";
import ListComponent from "component/ListComponent";

const parser = new DOMParser();
function Objective({ data }) {
  return (
    <>
      <ListComponent data={data.objectiveSkill} />

      <div className="objective">
        <h2 className="objective__title">
          <span>Mục Tiêu</span>
        </h2>
        {data.objective.map((e) => (
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
    </>
  );
}

export default Objective;
