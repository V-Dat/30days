import { useState } from "react";
import "./CardSelection.scss";

function CardSelection({ product, handleSelection, color, size, className }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (product) => {
    setIsActive(!isActive);
    console.log(isActive);
    handleSelection(product);
  };
  return (
    <div className={`${className} selection`}>
      <input
        type="button"
        onClick={() => handleClick(product)}
        value={size}
        style={{ backgroundColor: `${color}` }}
        className={`${isActive ? "active  " : ""}`}
      />
    </div>
  );
}

export default CardSelection;
