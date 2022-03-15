import "./index.css";
import "../../assets/css/grid.css";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";

function Template() {
  console.log("Template Render / Re-Render ");
  return (
    <div className="Template">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12"></div>
          <h1>something</h1>
        </div>
      </div>
    </div>
  );
}

export default Template;
