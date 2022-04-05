import data from "../../../pages/data";

export default function Certificate() {
  const certificates = data.about.certificates;
  return (
    <div className="certificate__detail">
      {certificates.map((cer) => (
        <div
          className="certificate__detail"
          key={cer.value}
          style={{ paddingBottom: "0.1rem" }}
        >
          <b>{cer.name}</b>
          <span style={{ paddingLeft: "1rem" }}> {cer.value}</span>
        </div>
      ))}
    </div>
  );
}
