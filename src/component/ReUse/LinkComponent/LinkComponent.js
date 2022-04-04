import "./LinkComponent.scss";

function LinkComponent({ href, text, children, className }) {
  return (
    <a href={href} className={`${className || ""} link`}>
      {text}
      {children}
    </a>
  );
}

export default LinkComponent;
