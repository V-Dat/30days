
import "./Card.scss";
export default function Card({ children, className, handleClick, data }) {
  return (
    <div
      className={`${className || ""} col-12 col-md-6 col-lg-4 col-xl-3`}
      onClick={() => handleClick(data)}
    >
      {children}
    </div>
  );
}
