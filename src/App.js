import './App.css';
import Header from './parts/Header'
import Content from './component/Content/Content.js';
import {  BrowserRouter as Router,  Routes,  Route, } from "react-router-dom";
function App() {

  const handleRemove = (e) => {
    const content = document.querySelector(".content");
      content.style = 'display: none'
    }

  return (
    <>
    <Router>
      <Header />
      <br/>
      <Content onClick ={handleRemove} /> 
    </Router>
    
    </>
  );
}

export default App;


