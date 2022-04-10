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
import data from "./productList.js";
import Footer from "../../parts/Footer";
import Row from "../../component/ReUse/Row/Row";
import Content from "../../component/ReUse/Content/Content";
import Container from "../../component/ReUse/Container/Container";
export default function Day1() {
  console.log("Day1: render....");
  const navigate = useNavigate();
  const [productList, setProductList] = useState(data);
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
  const getUserInput = (e) => {
    if (e.target.value === "") {
      setProductList(data);
      return;
    }
    const newProductList = productList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductList(newProductList);
  };

  return (
    <>
      <Header className="custom-header">
        <Child className="nav__item search-icon">
          <SearchBox
            className="custom-search__box"
            getUserInput={getUserInput}
          />
        </Child>
      </Header>
      <Content className="day1 background-color ">
        <Container>
          <Row className="row">
            {productList.map((product) => (
              <Card
                className="product-card col-12 col-md-6 col-lg-4 col-xl-3"
                key={`${product.name} ${product.prices}`}
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
                        key={size}
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
                        key={color}
                        product={product}
                        className="card-color__detail"
                        handleSelection={handleSelection}
                        color={color}
                      />
                    ))}
                  </Child>
                </Child>
                <Child
                  className="card-button d-flex justify-content-between flex-wrap"
                >
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
            {productList.length == 0 ? (
              <div class="alert alert-warning">
                <strong>Warning ! </strong>We Dont Have This Product{" "}
                <strong
                  href="#"
                  class="text-warning text-decoration-underlineg"
                  onClick={() => setProductList(data)}
                >
                  Go Back Hear
                </strong>
                .
              </div>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </Content>
      <Footer></Footer>
    </>
  );
}
{
  /* <Content className="day1 background-color">
<Container>
  <Row className="row">
    {productList.map((product) => (
      <Card
        className="product-card col-12 col-md-6 col-lg-4 col-xl-3"
        key={Math.random() * 9999}
      >
        <Child className="card-icon">
          <CardIcon
            product={product}
            iconClassName="bx bx-heart"
            handleClick={handleClickHeart}
          />
          <CardIcon
            product={product}
            handleClick={handleClickCart}
            iconClassName="bx bx-cart-alt"
          />
        </Child>
        <Child className="card-infor">
          <ImageComponent
            className="card-infor__image "
            alt={`Đây là hình ảnh của sản phẩm ${product.name}`}
            src={product.image}
          />
          <Text className="card-infor__name">{product.name}</Text>
          <Text className="card-infor__price">{product.price}</Text>
          <Child className="card-size">
            <Text className="card-size__title">{"Size: "}</Text>
            {product.size.map((size) => (
              <CardSelection
                key={size}
                product={product}
                className="card-size__detail"
                handleSelection={handleSelection}
                size={size}
              />
            ))} */
}
