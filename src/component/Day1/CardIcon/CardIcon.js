import { useState } from "react";
import "./CardIcon.scss";

function CardIcon({ iconClassName, product, handleClick }) {
  const [isActive, setIsActive] = useState(false);
  const handleClickOnCardIcon = (product) => {
    setIsActive(!isActive);
    handleClick(product);
  };

  return (
    <i
      onClick={() => handleClickOnCardIcon(product)}
      className={`${iconClassName} ${isActive ? "active" : ""} `}
    ></i>
  );
}

export default CardIcon;
