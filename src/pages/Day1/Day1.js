import "./index.scss";
import Card from "../../component/Card/Card";
import Button from "../../component/ReUse/Button/Button";
import CardIcon from "../../component/Day1/CardIcon/CardIcon";
import Child from "../../component/ReUse/Child/Child";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import Text from "../../component/ReUse/Text/Text";
import CardSelection from "../../component/Day1/CardSelection/CardSelection";
import { useNavigate } from "react-router-dom";
import Header from "../../parts/Header";
import { useState } from "react";
import SearchBox from "../../component/ReUse/SearchBox/SearchBox";
import dataProductList from "./productList.js";
import Row from "../../component/ReUse/Row/Row";
import { v4 as uuidv4 } from 'uuid';
import DayTemplate from "../DayTemplate/DayTemplate";

export default function Day1() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [productList, setProductList] = useState(dataProductList);
  const [isProductListNull, setIsProductListNull] = useState(false);
  // const [listProductInCart, setListProductInCart] = useState([]);
  // const [listProductInLove, setListProductInLove] = useState([]);
  //add to love
  const handleClickHeart = (product) => {
    console.log("yourProduct is : ", product);
  };
  ///add to cart
  const handleClickCart = (product) => {
    console.log("yourProduct is : ", product);
  };
  //direct to cart => and confirm
  const handleClickButtonBuy = (product) => {
    console.log("yourProduct you will buy : ", product);
    navigate("/your-packages");
    alert("This is pages Your packages");
  };
  ///add to cart
  const handleClickButtonAdd = (product) => {
    navigate("/your-packages");
    console.log("yourProduct you will add : ", product);
    alert("This is pages Your packages");
  };
  const handleSelection = (product) => {
    console.log("your select: ", product);
  };
  // get input from user
  const handleChangeInput = (e) => {
    setUserInput(e.target.value);

    const newProductList = dataProductList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setProductList(newProductList);
    setIsProductListNull(false);

    if (e.target.value === "") {
      setProductList(dataProductList);
      return;
    }

    if (newProductList.length === 0) {
      setProductList(dataProductList);
      setIsProductListNull(true);
      return;
    }
  };

  return (
    <>
      <Header className="custom-header">
        <Child className="nav__item search-icon ">
          <SearchBox
            className="custom-search__box"
            handleChangeInput={handleChangeInput}
            data={userInput || ""}
          />
        </Child>
      </Header>

      <DayTemplate background={`day1 background-color ${isProductListNull ? "dark" : ""}`} >
        <Row className="row">
          {productList.map((product) => (
            <Card
              className={`product-card col-12 col-md-6 col-lg-4 col-xl-3 ${isProductListNull ? "dark" : ""
                }`}
              key={uuidv4()}
            >
              <Child className="card-icon ">
                <CardIcon
                  product={product}
                  iconClassName="bx bx-heart"
                  handleClick={handleClickHeart}
                />
                <CardIcon
                  product={product}
                  handleClick={handleClickCart}
                  iconClassName="bx bx-cart-alt"
                />{" "}
              </Child>
              <Child className="card-infor">
                <ImageComponent
                  className="card-infor__image "
                  alt={`Đây là hình ảnh của sản phẩm ${product.name}`}
                  src={product.image}
                />
                <Text className="card-infor__name h2">{product.name}</Text>
                <Text className="card-infor__price">{product.price}</Text>
                <Child className="card-size">
                  <Text className="card-size__title">{"Size: "}</Text>
                  {product.size.map((size) => (
                    <CardSelection
                      key={uuidv4()}
                      product={product}
                      className="card-size__detail"
                      handleSelection={handleSelection}
                      size={size}
                    />
                  ))}
                </Child>

                <Child className="card-color">
                  <Text className="card-color__title">{"Color: "}</Text>
                  {product.color.map((color) => (
                    <CardSelection
                      key={uuidv4()}
                      product={product}
                      className="card-color__detail"
                      handleSelection={handleSelection}
                      color={color}
                    />
                  ))}
                </Child>
              </Child>
              <Child className="card-button d-flex justify-content-between flex-wrap">
                <Button
                  product={product}
                  className="btn buy"
                  handleClick={handleClickButtonBuy}
                >
                  BUY NOW
                </Button>
                <Button
                  data={product}
                  className="btn add"
                  handleClick={handleClickButtonAdd}
                >
                  ADD CART
                </Button>
              </Child>
            </Card>
          ))}
        </Row>
      </DayTemplate>
    </>
  );
}
