export default function Container({ children }) {
  return (
    <div className="container-fluid">
      <div className="container">{children}</div>
    </div>
  );
}
