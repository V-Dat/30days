import "./Header.scss";
import Row from "../component/ReUse/Row/Row";
import Child from "../component/ReUse/Child/Child";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header({ children, className }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className={`${className ? className : "header"}`}>
      <Row className="header-nav">
        <Child className="nav__item">
          <Link to="/">Home</Link>
        </Child>
        <Child className="nav__item">
          <Link to="/News">News</Link>
        </Child>

        <Child className="nav__item">
          <Link to="/About">About</Link>
        </Child>
        {children}
        <Child
          className="nav__item nav__item--menu"
          handleClick={handleClickMenu}
        >
          <i className="fas fa-bars"></i>
        </Child>
        {activeMenu ? (
          <Row className="sub-nav">
            <Child className="sub-nav__item" handleClick={handleClickMenu}>
              <Link to="/About">About</Link>
            </Child>
            <Child className="sub-nav__item" handleClick={handleClickMenu}>
              <Link to="/News">News</Link>
            </Child>
          </Row>
        ) : (
          ""
        )}
      </Row>
    </div>
  );
}
