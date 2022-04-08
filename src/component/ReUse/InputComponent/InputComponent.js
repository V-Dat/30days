import React, { useState } from "react";

function InputComponent({
  type,
  className,
  getUserInput,
  classNameActive,
  state,
}) {
  const handleKeyDown = (e) => {
    getUserInput(e);
  };
  return (
    <>
      {classNameActive && (
        <input
          type={type}
          className={`${className}  ${state ? classNameActive : ""}`}
          onKeyUp={(e) => handleKeyDown(e)}
          // onFocus={() => setActive(true)}
          // onBlur={() => setActive(false)}
        />
      )}
      {/* {!classNameActive && (
        <input
          type="text"
          className={`${className} input}`}
          onKeyUp={(e) => handleKeyDown(e)}
        />
      )} */}
    </>
  );
}

export default InputComponent;
