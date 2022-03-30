import "./Button.css";

import React from "react";

function Button({ icon, onClick, type }) {
  return (
    <div className={type} onClick={onClick}>
      {icon}
    </div>
  );
}

export default Button;
