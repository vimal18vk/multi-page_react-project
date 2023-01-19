
import './App.css';
import Home from './pages/Home';
import Today_special from './pages/Today_special';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import react from "react"
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,



}from"react-router-dom";

import { Fragment } from 'react';
function App() {
  return (
    <div className="App">
      {/* <Home/>
      <Today_special/>
      <Menu/>
      <Contact/> */}
     <Router>
      <Routes>
      <Route  index path="/" element={<Home/>}/>
      <Route path="/today_special" element={<Today_special/>}/>
      <Route  path="/menu" element={<Menu/>}/>
      <Route  path="/contact" element={<Contact/>}/>


    
      </Routes>
     </Router>
    
      
   
      
     </div>
  );
}

export default App;
