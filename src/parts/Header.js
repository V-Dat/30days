import { BrowserRouter as Router , Route, Routes, Link, Outlet} from "react-router-dom";
import About from '../pages/About/About.js'
import News from '../pages/News/News.js'
import App1 from "../App";
import {useEffect} from 'react'
import './Header.css';
import '../assets/css/grid.css';

function Header() {
  const handleRemove = () => {
    const content = document.querySelector(".content");
    content.style = 'display: none'
    const root2 = document.querySelector(".root2");
    root2.style = 'display: none'
    }

  const handleAdd = () => {
      const content = document.querySelector(".content");
        content.style = 'display: block'
  }


  console.log('header re-render')


  return (
    <>
    <div className="header grid " >
        <div className="nav row">
          <div className="nav__item"><Link to="/" onClick={handleAdd} >Home</Link></div>
          <div className="nav__item"><Link to="/News" onClick={handleAdd}>News</Link></div>
          <div className="nav__item"><Link to="/About" onClick={handleAdd} >About</Link></div>
        </div>
    </div>

    <Routes>
        <Route  path="/"  element={<Outlet />} />
        <Route  path="/News" element={<News onClick={handleRemove}/>} />
        <Route  path="/About" element={<About onClick={handleRemove} />} />
    </Routes>
    </>
  );
}

export default Header;
