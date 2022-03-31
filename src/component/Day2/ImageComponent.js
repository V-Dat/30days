function ImageComponent({ src, className, children }) {
  return (
    <>
      <div className={`${className || ""}`}>
        <img src={src} alt="Not Found" />
      </div>
      {children}
    </>
  );
}

export default ImageComponent;
