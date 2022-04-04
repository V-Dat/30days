import { useState } from "react";

export default function Button({ className, handleClick, children, data }) {
  const [isActive, setIsActive] = useState(false);
  const handleClickButton = (product) => {
    setIsActive(!isActive);
    handleClick(product);
  };
  return (
    <div
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={() => handleClickButton(data)}
    >
      {children}
    </div>
  );
}
