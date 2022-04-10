import "./index.scss";
import { useState } from "react";
import data from "../data";
import Content from "../../component/ReUse/Content/Content";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Button from "../../component/ReUse/Button/Button";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import Card from "../../component/Card/Card";

export default function Day4() {
  const galary = data.galary;
  const length = galary.length;
  const [src, setSrc] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [indexOfCurrentImage, setIndexOfCurrentImage] = useState(0);
  const handleClickNext = () => {
    setIndexOfCurrentImage((indexOfCurrentImage + 1 + length) % length);
    setSrc(galary[(indexOfCurrentImage + 1 + length) % length].url);
  };
  const handleClickPrev = () => {
    setIndexOfCurrentImage((indexOfCurrentImage - 1 + length) % length);
    setSrc(galary[(indexOfCurrentImage - 1 + length) % length].url);
  };
  const handleClickImage = (picture) => {
    setShowImage(true);
    setSrc(picture.url);
    setIndexOfCurrentImage(galary.indexOf(picture));
  };
  const handleClose = () => {
    setShowImage(false);
    console.log(showImage);
  };

  return (
    <Content className="day4 background-color">
      <Container>
        <Row className="row">
          {galary.map((picture) => (
            <Card
              key={`${picture.url}`}
              className="galary p-4"
              handleClick={handleClickImage}
              data={picture}
            >
              <ImageComponent
                className="galary__image"
                src={picture.url}
                alt={picture.name}
              />
            </Card>
          ))}
        </Row>
      </Container>

      {showImage ? (
        <div className="control wide">
          <Button className="control__close" handleClick={handleClose}>
            <i className="fas fa-times close"></i>
          </Button>

          <Button className="control__prev" handleClick={handleClickPrev}>
            <i className="fas fa-chevron-left"></i>
          </Button>

          <ImageComponent
            className="control__image"
            src={src}
            alt={"Đây là hình ảnh"}
          />

          <Button className="control__next" handleClick={handleClickNext}>
            <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      ) : (
        ""
      )}
    </Content>
  );
}
