import "./index.css";
import "../../assets/css/grid.css";
import data from "../data";
import Card from "../../component/Day1/Card.js";
import { useMemo, useState } from "react";

function Day1() {
  console.log("Day1: render....");
  const [cardColorActive, setCardColorActive] = useState(false);
  const productList = useMemo(() => data.productList, []);

  const handleCardColor = (e) => {
    setCardColorActive(!cardColorActive);
  };

  return (
    <div className="day1 grid wide">
      <div className="row">
        {productList.map((product, index) => (
          <Card
            key={index}
            product={product}
            handleCardColor={handleCardColor}
            cardColorActive={cardColorActive}
          />
        ))}
      </div>
    </div>
  );
}

export default Day1;
