import "./index.css";
import "../../assets/css/grid.css";

import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import { useState } from "react";

function News() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("news re-render");

  const handleClick = () => {
    console.log(email ,name);
  };

  return (
    <>
    <Header></Header>
    <div className="new">
      <div style={{ padding: 32 }}>
        <input  onChange={(e) => setName(e.target.value)} />
        <input  onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleClick}>Change</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default News;
