import React, { useState } from "react";

function CardColor({ color }) {
  const [cardColorActive, setCardColorActive] = useState(false);

  const handleCardColor = (e) => {
    setCardColorActive(!cardColorActive);
  };

  return (
    <input
      className={`${cardColorActive ? "card__color-active" : ""}`}
      type="button"
      style={{ backgroundColor: `${color}` }}
      onClick={(e) => handleCardColor(e)}
      name="color"
    />
  );
}

export default CardColor;
