import React from "react";

function Text({ className, children }) {
  return <div className={`${className || ""} text`}>{children}</div>;
}

export default Text;
