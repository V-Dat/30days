import "./Header.scss";
import "../assets/css/grid.css";
import { memo } from "react";
import { Link } from "react-router-dom";

function Header() {
  console.log("header re-render");
  return (
    <>
      <div className="header grid ">
        <div className="nav row">
          <div className="nav__item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav__item">
            <Link to="/News">News</Link>
          </div>
          <div className="nav__item">
            <Link to="/About">About</Link>
          </div>
          <div className="nav__item nav__item--menu">
            <i className="fas fa-bars"></i>
          </div>
          <div className="sub-nav">
            <div className="sub-nav__item">
              <Link to="/About">About</Link>
            </div>
            <div className="sub-nav__item">
              <Link to="/News">News</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
