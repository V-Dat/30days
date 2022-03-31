export default function Social({ children, className }) {
  return <div className={`${className || "social"} `}>{children}</div>;
}
