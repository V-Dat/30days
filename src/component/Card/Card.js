
import "./Card.scss";
export default function Card({ children, className, handleClick, data }) {
  return (
    <div
      className={`${className || ""} col l-3 m-6 c-12`}
      onClick={() => handleClick(data)}
    >
      {children}
    </div>
  );
}
