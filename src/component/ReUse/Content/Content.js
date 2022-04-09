import React from "react";

export default function Content({ className, children }) {
  return <div className={`${className || ""}`}>{children}</div>;
}
