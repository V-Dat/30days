import "./SearchBox.scss";
import { useState } from "react";
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";

function SearchBox({ data, getInputUserInput, className }) {
  console.log("Day3: render....");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleClickButtonSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setShowInput(!showInput);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      console.log("Your Input: ", e.target.value);
      e.target.value = "";
    }
    getInputUserInput(e);
  };
  return (
    <div className={`search-box ${className}`}>
      <InputComponent
        state={showInput}
        className="search-box__input"
        type="text"
        classNameActive="search-box__input--active"
        onKeyUp={(e) => handleKeyUp(e)}
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

export default SearchBox;
