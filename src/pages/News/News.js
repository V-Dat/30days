import "./index.css";

import { useState } from "react";
export default function News() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="new">
      <div style={{ padding: 32 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button>Change</button>
      </div>
    </div>
  );
}
