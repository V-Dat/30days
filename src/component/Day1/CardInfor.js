

function CardInfor({ product }) {
  return (
    <>
      <div className="card__image card-item">
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className="card__name card-item">{product.name}</h2>
      <div className="card__price card-item">{product.price}</div>
    </>
  );
}

export default CardInfor;
