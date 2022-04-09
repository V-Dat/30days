function Child({ className, children, handleClick }) {
  return (
    <>
      {handleClick ? (
        <div className={`${className || ""}`} onClick={(e) => handleClick(e)}>
          {children}
        </div>
      ) : (
        <div className={`${className || ""}`}>{children}</div>
      )}
    </>
  );
}
export default Child;
