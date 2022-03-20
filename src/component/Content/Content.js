import "./index.css";
import "../../assets/css/grid.css";

import data from "../../pages/data.js";

import { Link } from "react-router-dom";
import { memo } from "react";
import Footer from "../../parts/Footer";
import Header from "../../parts/Header";

function Content({ onClick }) {
  const dayList = data.dayList;
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default memo(Content);
