import React from "react";
import { Link } from "react-router-dom";

function Day({ data }) {
  return (
    <Link key={data.index} to={data.url}>
      <div className="preview col l-3 m-6 c-12">
        <img className="preview__image" src={data.imageUrl} alt={data.name} />
        <h2 className="preview__title">{data.name}</h2>
      </div>
    </Link>
  );
}

export default Day;
