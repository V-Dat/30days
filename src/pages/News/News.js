import "./index.css";
import { useState } from "react";

function News() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log(email, name);
  };

  return (
    <div className="new">
      <div style={{ padding: 32 }}>
        <input onChange={(e) => setName(e.target.value)} />
        <input onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleClick}>Change</button>
      </div>
    </div>
  );
}

export default News;
