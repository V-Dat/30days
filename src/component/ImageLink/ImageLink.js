export default function ImageLink({ href, src }) {
  return (
    <a href={href}>
      <img src={src} alt="./NotFound" />
    </a>
  );
}

