
import "./ImageComponent.scss";
function ImageComponent({ src, className, children, alt }) {
  return (
    <>
      <div className={`${className || ""}`}>
        <img src={src} alt={alt} />
      </div>
      {children}
    </>
  );
}

export default ImageComponent;
