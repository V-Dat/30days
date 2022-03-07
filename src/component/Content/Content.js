import "./index.css";
import "../../assets/css/grid.css";

import data from "../../pages/data.js";
import Day1 from "../../pages/Day1/Day1";
import Day2 from "../../pages/Day2/Day2";
import Day3 from "../../pages/Day3/Day3";
import Day4 from "../../pages/Day4/Day4";
import Day5 from "../../pages/Day5/Day5";
import Day6 from "../../pages/Day6/Day6";
import Day7 from "../../pages/Day7/Day7";
import Day8 from "../../pages/Day8/Day8";

import { Route, Routes, Link, Outlet } from "react-router-dom";
import { useState, useEffect, memo } from "react";

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
