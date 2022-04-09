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
}) {
  return (
    <>
      {classNameActive && (
        <input
          type={type}
          className={`${className}  ${state ? classNameActive : ""}`}
          onKeyUp={(e) => getUserInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleChange(e)}
          value={value}
          checked={checked}
        />
      )}
      {!classNameActive && (
        <input
          type={type}
          className={`${className} input}`}
          onKeyDown={handleKeyDown ? (e) => handleKeyDown(e) : () => {}}
          onChange={handleChange ? (e) => handleChange(e) : () => {}}
          value={value}
          onKeyUp={getUserInput ? (e) => getUserInput(e) : () => {}}
          checked={checked}
        />
      )}
    </>
  );
}
