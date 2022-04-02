
function IconLabel({className,text,iconClassName}) {
  return (
    <div className={className}>
      <i className={iconClassName}></i>
      {text}
    </div>
  );
}

export default IconLabel;
