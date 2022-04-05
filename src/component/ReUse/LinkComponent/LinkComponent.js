import "./LinkComponent.scss";

export default  function LinkComponent({ href, text, children, className }) {
  return (
    <a href={href} className={`${className || ""} link`}>
      {text}
      {children}
    </a>
  );
}

