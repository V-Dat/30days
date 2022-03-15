import "./index.css";
import "../../assets/css/grid.css";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import data from "../data.js";

import { Link } from "react-router-dom";
import { memo } from "react";

function Homepage() {
  const dayList = data.dayList;
  console.log("Homepage/ Homepage re-render ");

  return (
    <>
      <Header></Header>
      <div className="homepage">
        <div className="grid wide">
          <div className="row">
            {dayList.map((e) => (
              <div key={e.index + e.name} className="preview col l-3 m-6 c-12">
                <Link to={e.url}>
                  <img
                    className="preview__image"
                    src={e.imageUrl}
                    alt={e.name}
                  />
                  <h2 className="preview__title">{e.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default memo(Homepage);
