import "./SlideShow.scss";
import { useState } from "react";
import ImageComponent from "../ReUse/ImageComponent/ImageComponent";
import Button from "../ReUse/Button/Button";

export default function SlideShow({ listImage }) {
  const [indexOfCurrentImage, setIndexOfCurrentImage] = useState(0);
  const length = listImage.length;
  const handleClickNext = () => {
    setIndexOfCurrentImage((indexOfCurrentImage + 1 + length) % length);
  };
  const handleClickPrev = () => {
    setIndexOfCurrentImage((indexOfCurrentImage - 1 + length) % length);
  };
  return (
    <>
      <div className="slide-show">
        <ImageComponent
          src={listImage[indexOfCurrentImage]}
          className="slide-image"
        ></ImageComponent>
        <Button handleClick={handleClickPrev} className="slide-show__btnLeft">
          <i className="fa-solid fa-less-than"></i>
        </Button>
        <Button handleClick={handleClickNext} className="slide-show__btnRight">
          <i className="fa-solid fa-greater-than"></i>
        </Button>
      </div>
    </>
  );
}
