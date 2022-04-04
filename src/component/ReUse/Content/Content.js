import React from "react";

function Content({ className, children }) {
  return <div className={`${className || ""}`}>{children}</div>;
}

export default Content;
