import "./index.css";
import "../../assets/css/grid.css";

import data from "pages/data";


import {  Link  } from "react-router-dom";
import {  memo } from "react";

function Content({ onClick }) {
  const dayList = data.dayList;
  const content = document.querySelector(".content");


  console.log("content homepage re-render ");

  return (
    <>
      <div className="content grid wide">
        <div className="row" onClick={(e) => onClick(e)}>
          {dayList.map((e) => (
            <div key={e.index + e.name} className="preview col l-3 m-6 c-12">
              <Link to={e.url}>
                <img className="preview__image" src={e.imageUrl} alt={e.name} />
                <h2 className="preview__title">{e.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default memo(Content);
