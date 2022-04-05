function IconLabel({ className, children, iconClassName, href }) {
  return (
    <div className={className}>
      {href && (
        <a href={href}>
          <i className={iconClassName}></i>
          {children}
        </a>
      )}
      {!href && (
        <>
          <i className={iconClassName}></i>
          {children}
        </>
      )}
    </div>
  );
}

export default IconLabel;
