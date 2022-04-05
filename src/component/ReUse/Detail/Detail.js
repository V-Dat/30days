export default function Detail({ className, children }) {
  return (
    <>
      {className && <div className={`${className || ""}`}>{children}</div>}
      {!className && <> {children} </>}
    </>
  );
}
