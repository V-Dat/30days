import "./Dialog.scss";
import "../../assets/css/grid.css";
import { useState } from "react";

function Dialog() {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenModel = () => {
    setShowDialog(true);
  };

  const handleCloseModel = () => {
    setShowDialog(false);
  };

  return (
    <div className="dialog">
      <div className={` ${showDialog ? "dialog--show" : "dialog--hide"} `}>
        <div className="dialog__inner">
          <div className="dialog__header">
            <p>Welcome to my website</p>
            <i className="fas fa-times" onClick={handleCloseModel}></i>
          </div>
          <div className="dialog__body">
            <h2>Modal</h2>
            <p>Đây là phần nội dung thông báo</p>
          </div>
          <div className="dialog__footer">
            <button onClick={handleCloseModel}>Close</button>
          </div>
        </div>
      </div>
      <button className="dialog__btnOpen" onClick={handleOpenModel}>
        Open Modal
      </button>
    </div>
  );
}

export default Dialog;
