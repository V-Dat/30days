import "./IconLabel.scss";
export default function IconLabel({ className, children, href }) {
  return (
    <>
      {className ? (
        <div className={className}>
          {href && <a href={href}>{children}</a>}
          {!href && <>{children}</>}
        </div>
      ) : (
        <>
          {href && <a href={href}>{children}</a>}
          {!href && <>{children}</>}
        </>
      )}
    </>
  );
}
