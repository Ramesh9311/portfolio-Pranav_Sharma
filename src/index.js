import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Portfolio';
import { Introsection } from './Portfolio';
import {Work} from './Portfolio';
import {About} from './Portfolio';
import {Contact} from './Portfolio';
import './Portfolio.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


function Packages(){
  const [mode, setmode] = useState("dark");
  const [darkbtntext, lightbtntext] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode ==="dark") {
     setmode("light");
     lightbtntext("Enable Light Mode");
     document.body.style.backgroundImage = 'url(/darkbackground.jpg)';
    } else {
      setmode("dark");
      lightbtntext("Enable Dark Mode") 
      document.body.style.backgroundImage = 'url(/lightbackground.jpg)';
      }
    }
 
  return( 
    <div className='body'>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} btnmode={darkbtntext}/>
    <Routes>
      <Route path='/' element = {<Introsection mode={mode} toggleMode={toggleMode} btnmode={darkbtntext}/>}/>
      <Route path='/Work' element = {<Work/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
    </Routes>
  </Router>
  </div>
  );
}

 ReactDOM.render(<Packages /> , document.getElementById("root"));