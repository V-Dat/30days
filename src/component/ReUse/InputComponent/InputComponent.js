export default function InputComponent({
  type,
  className,
  getUserInput,
  classNameActive,
  state,
  handleChange,
  handleKeyDown,
  value,
  checked,
  data,
}) {
  return (
    <>
      {classNameActive && (
        <input
          type={type}
          className={`${className}  ${state ? classNameActive : ""}`}
          onKeyUp={(e) => getUserInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={handleChange ? (e) => handleChange(e, data) : () => {}}
          value={value}
          checked={checked}
        />
      )}
      {!classNameActive && (
        <input
          type={type}
          className={`${className} input`}
          onKeyDown={handleKeyDown ? (e) => handleKeyDown(e) : () => {}}
          onChange={handleChange ? (e) => handleChange(e, data) : () => {}}
          value={value}
          onKeyUp={getUserInput ? (e) => getUserInput(e) : () => {}}
          checked={checked}
        />
      )}
    </>
  );
}
