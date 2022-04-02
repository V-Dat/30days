function ImageLink({ href, src }) {
  return (
    <a href={href}>
      <img src={src} alt="./NotFound" />
    </a>
  );
}

export default ImageLink;
