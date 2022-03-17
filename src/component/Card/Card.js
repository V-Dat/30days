import "./Card.scss";
import React from "react";

function Card({ children, className }) {
  return (
    <div className={`${className || ""} col l-3 m-6 c-12`}>{children}</div>
  );
}

export default Card;
