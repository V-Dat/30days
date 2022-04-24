import "./index.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Content from "../../component/ReUse/Content/Content";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Button from "../../component/ReUse/Button/Button";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import Card from "../../component/Card/Card";
import Axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Day4() {
  const url = 'https://api.unsplash.com/photos/?client_id=iLkxj0otL2j0TvMrd6OmKGO37mm3e3bawbeaIcwQygY';
  const [images, setImages] = useState([]);
  const length = images.length;
  const [src, setSrc] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [indexOfCurrentImage, setIndexOfCurrentImage] = useState(0);
  const handleClickNext = () => {
    setIndexOfCurrentImage((indexOfCurrentImage + 1 + length) % length);
    setSrc(images[(indexOfCurrentImage + 1 + length) % length].src);
  };
  const handleClickPrev = () => {
    setIndexOfCurrentImage((indexOfCurrentImage - 1 + length) % length);
    setSrc(images[(indexOfCurrentImage - 1 + length) % length].src);
  };
  const handleClickImage = (event, data) => {
    setShowImage(true);
    setSrc(data.src);
    setIndexOfCurrentImage(data.id);
  };
  const handleClose = () => {
    setShowImage(false);
    console.log(showImage);
  };

  const getImages = () => {
    Axios.get(url).then((res) => {
      const listImageUrl = res.data.map( (image,index) => ({id: index , src: image.urls.regular, alt:image.alt_description}) )
      setImages(listImageUrl)
      console.log(listImageUrl)
    })

  }
  useEffect(() => {
    getImages();
  }, [])

  return (
    <Content className="day4 background-color">
      <Container>
        <Row className="row">
          {images.map((image) => (
            <Card
              key={uuidv4()}
              className="galary p-4"
              handleClick={handleClickImage}
              data={image}
            >
              <LazyLoadImage
                className='galary__image'
                effect="blur"
                src={image.src}
                alt={image.alt}
                key={uuidv4()}
                height="100%"
                width="100%"
                placeholderSrc=''
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
