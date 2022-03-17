import { useState } from "react";

function CardAction({ product }) {
  const [heartActive, setHeartActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const handleClickHeart = () => {
    setHeartActive(!heartActive);
  };
  const handleClickCart = () => {
    setCartActive(!cartActive);
  };
  return (
    <>
      <span className="card__action card-item">
        <i
          onClick={handleClickHeart}
          className={`bx bx-heart ${heartActive ? "active" : ""} `}
        ></i>
        <i
          onClick={handleClickCart}
          className={`bx bx-cart-alt ${cartActive ? "active" : ""}`}
        ></i>
      </span>
    </>
  );
}

export default CardAction;
