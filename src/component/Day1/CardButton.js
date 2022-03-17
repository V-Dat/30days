import { useState } from "react";

function CardButton() {
  const [activeButtonBuy, setActiveButtonBuy] = useState(false);

  const handleClickButton = (e) => {
    setActiveButtonBuy(!activeButtonBuy);
  };

  return (
    <div className="card__action card-item ">
      <button
        className={`btn buy ${activeButtonBuy ? "card__button-active" : ""}`}
        onClick={(e) => handleClickButton(e)}
      >
        BUY NOW
      </button>
      <button className="btn add">ADD CART</button>
    </div>
  );
}

export default CardButton;
