import "./InputComponent.scss";
import "../../assets/css/grid.css";
import { useState } from "react";

function InputComponent({
  className,
  caption,
  placeholder,
  value,
  type,
  handleFunction,
}) {
  return (
    <div className={className}>
      <p className="caption">{caption}</p>
      <input
        type={type}
        onChange={(e) => handleFunction(e)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputComponent;
