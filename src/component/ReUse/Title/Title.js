import "./Title.scss";

function Title({ title, className }) {
  return (
    <h2 className={`${className || ""} title`}>
      <span>{title}</span>
    </h2>
  );
}

export default Title;
