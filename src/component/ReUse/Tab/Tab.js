import "./Tab.scss";

export default function Tab({
  handleClick,
  className,
  iconClassName,
  children,
  data,
}) {
  return (
    <div className={`${className || ""} tab`} onClick={() => handleClick(data)}>
      <i className={iconClassName}></i>
      {children}
    </div>
  );
}
