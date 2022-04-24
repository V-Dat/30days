
function InputComponent({
  className,
  caption,
  placeholder,
  value,
  type,
  handleFunction,
}) {
  return (
    <div className={className}>
      <p className="caption">{caption}</p>
      <input
        type={type}
        onChange={(e) => handleFunction(e)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputComponent;
