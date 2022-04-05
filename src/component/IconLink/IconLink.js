import React from "react";

function IconLink({ href, className, iconClassName, text }) {
  return (
    <div className={className}>
      <a href={href}>
        <i className={iconClassName}></i>
        {text}
      </a>
    </div>
  );
}

export default IconLink;
