import './App.css';
import Header from './parts/Header'
import Footer from './parts/Footer'
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
      <Footer />
    </Router>
    
    </>
  );
}

export default App;


