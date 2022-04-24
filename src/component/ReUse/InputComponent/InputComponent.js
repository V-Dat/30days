export default function InputComponent({
  type,
  className,
  handleKeyUp,
  classNameActive,
  state,
  handleChange,
  handleKeyDown,
  value,
  checked,
  data,
  placeholder,
  label,
  children,
}) {
  return (
    <>
      {classNameActive && (
        <label>
          {label}
          <input
            type={type}
            className={`${className}  ${state ? classNameActive : ""}`}
            onKeyUp={handleKeyUp ? (e) => handleKeyUp(e, data) : () => {}}
            onKeyDown={handleKeyDown ? (e) => handleKeyDown(data, e) : () => {}}
            onChange={handleChange ? (e) => handleChange(e, data) : () => {}}
            value={value}
            checked={checked}
            placeholder={placeholder}
          />
          {children}
        </label>
      )}
      {!classNameActive && (
        <label>
          {label}
          <input
            type={type}
            className={`${className} input`}
            onKeyDown={handleKeyDown ? (e) => handleKeyDown(data, e) : () => {}}
            onChange={handleChange ? (e) => handleChange(e, data) : () => {}}
            value={value}
            onKeyUp={handleKeyUp ? (e) => handleKeyUp(e, data) : () => {}}
            checked={checked}
            placeholder={placeholder}
          />
          {children}
        </label>
      )}
    </>
  );
}
