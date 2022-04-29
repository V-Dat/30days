import { useState } from "react";

export default function Button({ className, handleClick, children, data }) {
  const [isActive, ] = useState(false);
  return (
    <button
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={handleClick ? (e) => handleClick(e, data) : () => {}}
    >
      {children}
    </button>
  );
}
