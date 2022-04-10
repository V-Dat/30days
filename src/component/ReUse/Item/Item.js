import "./Item.scss";

export default function Item({ icon, text, className }) {
  return (
    <div className={`${className || ""} item`}>
      <span dangerouslySetInnerHTML={{ __html: `${icon}` }} />
      <span>{text}</span>
    </div>
  );
}
