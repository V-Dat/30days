import "./index.css";
import "../../assets/css/grid.css";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import data from "../data";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";

function Day9() {
  const [avatar, setAvatar] = useState("");
  const [arrAvatar, setArrAvatar] = useState([]);

  const handlePicker = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    setArrAvatar((prev) => [...prev, file]);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar);
      console.log("revoke file ");
    };
  }, [avatar]);

  console.log("Mount or Re-Render ");
  return (
    <>
      <Header></Header>
      <div className="day9 grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className="image">
              <input
                className="image__picker"
                type="file"
                onChange={(e) => handlePicker(e)}
              />
              <div className="image__show">
                <img src={avatar.preview} alt="" />
              </div>

              {arrAvatar.map((avt) => (
                <div className="imageList" key={avt.index}>
                  <div className="image-item"></div>
                  <img src={avt.preview} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Day9;
