import React from "react";

export default function IconLink({ href, className, iconClassName, text }) {
  return (
    <div className={className}>
      <a href={href}>
        <i className={iconClassName}></i>
        {text}
      </a>
    </div>
  );
}

