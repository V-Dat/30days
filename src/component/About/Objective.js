import "./objective.css";
import ListComponent from '../ListComponent'

import {memo} from 'react';
function Objective({ data }) {
  console.log('objective render /re-render')
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

export default memo(Objective);
