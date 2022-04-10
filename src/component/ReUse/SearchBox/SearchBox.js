import { useState } from "react";
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent.js";

export default function SearchBox({ data, getUserInput, className }) {
  console.log("Day3: render....");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleClickButtonSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setShowInput(!showInput);
  };

  return (
    <div className={`search-box ${className}`}>
      <InputComponent
        state={showInput}
        className="search-box__input"
        type="text"
        classNameActive="search-box__input--active"
        getUserInput={getUserInput}
      />
      <Button
        className={`search-box__button ${
          showSearchBox ? "search-box__button--active" : ""
        }`}
        handleClick={handleClickButtonSearchBox}
      >
        <i className="fa fa-search"></i>
      </Button>
    </div>
  );
}
