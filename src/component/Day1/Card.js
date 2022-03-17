import CardAction from "./CardAction";
import CardButton from "./CardButton";
import CardColor from "./CardColor";
import CardInfor from "./CardInfor";
import CardSize from "./CardSize";

function Card({ product }) {
  return (
    <>
      <div className="card col l-3 m-6 c-12">
        <CardAction product={product} />
        <CardInfor product={product} />

        <div className="card__size card-item">
          <h3>SIZE:</h3>
          {product.size.map((size) => (
            <CardSize key={size} size={size} />
          ))}
        </div>

        <div className="card__color card-item">
          <h3>COLOR:</h3>
          {product.color.map((color) => (
            <CardColor key={color} color={color} />
          ))}
        </div>

        <CardButton />
      </div>
    </>
  );
}

export default Card;
