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
      {label && (
        <label>
          {label}
          <input
            type={type}
            className={`${className}  ${state ? classNameActive : "input"}`}
            onKeyUp={handleKeyUp ? (e) => handleKeyUp(e, data) : () => { }}
            onKeyDown={handleKeyDown ? (e) => handleKeyDown(e,data) : () => {}}
            onChange={handleChange ? (e) => handleChange(e, data) : () => { }}
            value={value}
            checked={checked}
            placeholder={placeholder}
          />
          {children}
        </label>
      )}
      {!label && (
        <>
          <input
            type={type}
            className={`${className}  ${state ? classNameActive : "input"}`}
            onKeyDown={handleKeyDown ? (e) => handleKeyDown(e,data) : () => { }}
            onChange={handleChange ? (e) => handleChange(e, data) : () => { }}
            value={value}
            onKeyUp={handleKeyUp ? (e) => handleKeyUp(e, data) : () => { }}
            checked={checked}
            placeholder={placeholder}
          />
          {children}
        </>
      )}
    </>
  );
}
