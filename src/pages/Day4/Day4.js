import "./index.scss";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Content from "../../component/ReUse/Content/Content";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Card from "../../component/Card/Card";
import useAxios from "../../Handler/useAxios"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ControImagelLayout from "../../component/ReUse/ControImagelLayout/ControImagelLayout";

export default function Day4() {
  const url = 'https://api.unsplash.com/photos/?client_id=iLkxj0otL2j0TvMrd6OmKGO37mm3e3bawbeaIcwQygY';
  const expectData = useCallback((data) => { return data.map((it) => ({ id: it.id, src: it.data.urls.regular, alt: it.data.blur_hash })) }, [])
  const [axiosData, axiosDataLength] = useAxios(url, expectData)
  const [src, setSrc] = useState("");
  const [showImageControl, setShowImageControl] = useState(false);
  const [indexOfCurrentImage, setIndexOfCurrentImage] = useState(0);

  const handleClickNext = () => {
    const nextIndex = Number((indexOfCurrentImage + 1 + axiosDataLength) % axiosDataLength)
    const currentImage = axiosData[nextIndex]
    setIndexOfCurrentImage(nextIndex);
    setSrc(currentImage.src);
  };
  const handleClickPrev = () => {
    const prevIndex = Number((indexOfCurrentImage - 1 + axiosDataLength) % axiosDataLength)
    const currentImage = axiosData[prevIndex]
    setIndexOfCurrentImage(prevIndex);
    setSrc(currentImage.src);
  };
  const handleClickImage = (event, data) => {
    const currentIndex = data.id
    setShowImageControl(true);
    setSrc(data.src);
    setIndexOfCurrentImage(currentIndex);
  };
  const handleClose = () => {
    setShowImageControl(false);
    setIndexOfCurrentImage(0);
  };


  return (
    <Content className="day4 background-color">
      <Container>
        <Row className="row">
          {axiosData.map((image) => (
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

      {showImageControl ? (
        <ControImagelLayout
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        handleClose={handleClose}
        src={src}
        />
      ) : (
        ""
      )}
    </Content>
  );
}
