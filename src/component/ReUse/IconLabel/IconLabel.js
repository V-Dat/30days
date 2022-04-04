import "./IconLabel.scss";
function IconLabel({ className, iconClassName, data, children }) {
  return (
    <div className={className}>
      <i className={iconClassName}></i>
      {children}
    </div>
  );
}

export default IconLabel;
