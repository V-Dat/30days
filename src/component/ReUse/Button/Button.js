function Button({ className, iconClassName, handleClick, children, data }) {
  return (
    <div className={className} onClick={() => handleClick(data)}>
      <i className={iconClassName}></i>
      {children}
    </div>
  );
}
export default Button;
