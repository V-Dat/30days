import "./index.css";
import "../../assets/css/grid.css";
import { useState , useMemo } from "react";
import data from '../data'

function Day1( {}) {

  console.log('Day1: render....')





const [active , setActive] = useState('false');

const  productList = data.productList

const handleActive = e => {
  e.target.classList.toggle('active')
}
const handleCardSize = e =>{
  e.target.classList.toggle('card__size-active')
}

const handleCardColor = e =>{
  e.target.classList.toggle('card__color-active')
}

const handleClickButton = e =>{
  e.target.classList.add('card__button-active')
  setTimeout(() =>e.target.classList.remove('card__button-active'), 200)
}

  return (
    <div className="day1 grid wide">
      <div className="row">
        {productList.map((product, index) => (
          <div key={index} className="card col l-3 m-6 c-12">
            <span className="card__action card-item " onClick={ (e) => handleActive(e)}>
              <i className="bx bx-heart" ></i>
              <i className="bx bx-cart-alt"></i>
            </span>
            <div className="card__image card-item">
              <img src={product.image} alt={product.name} />
            </div>
            <h2 className="card__name card-item">{product.name}</h2>
            <div className="card__price card-item">{product.price}</div>

            <div  className="card__size card-item" >
            <h3>SIZE:</h3>
            {product.size.map( (e) => (
              <input type='button' key={e} onClick={ (e) => handleCardSize(e)} value={e} />
              ))}
            </div>
            <div className="card__color card-item">
            <h3>COLOR:</h3>
            {product.color.map( (e) => (
              <input type='button' key={e} style={{ backgroundColor: `${e}`}} onMouseDown={(e) => handleCardColor(e)} name='color' />
              ))}
            </div>
            <div className="card__action card-item ">
              <button className='btn buy'onClick={ (e) => handleClickButton(e)}>BUY NOW</button>
              <button className='btn add'onClick={ (e) => handleClickButton(e)}>ADD CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day1;
