import React from "react";

export default function Text({ className, children }) {
  return <div className={`${className || ""} text`}>{children}</div>;
}
