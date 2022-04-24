import "./SearchBox.scss";
import { useState } from "react";

function SearchBox() {
  console.log("Day3: render....");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleClickButtonSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setShowInput(!showInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Your Input: ", e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className={`search-box__input ${
          showSearchBox ? "search-box__input--active" : ""
        }`}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        className={`search-box__button ${
          showSearchBox ? "search-box__button--active" : ""
        }`}
        onClick={handleClickButtonSearchBox}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBox;
