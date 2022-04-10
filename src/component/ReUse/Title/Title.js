import "./Title.scss";

export default function Title({ children, title, className }) {
  return (
    <h2 className={`${className || ""} title`}>
      <span>{title}</span>
      {children}
    </h2>
  );
}
