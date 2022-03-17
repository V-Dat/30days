import React, { useState } from "react";

function CardSize({ size }) {
  const [cardSizeActive, setCardSizeActive] = useState(false);

  const handleCardSize = (e, size) => {
    if (e.target.value === size) {
      console.log(e.target.value);
      console.log(size);
      setCardSizeActive(!cardSizeActive);
    }
  };
  return (
    <input
      type="button"
      onClick={(e) => handleCardSize(e, size)}
      value={size}
      className={`${cardSizeActive ? "card__size-active" : ""}`}
    />
  );
}

export default CardSize;
