import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Portfolio';
import { Introsection } from './Portfolio';
import { Introsection2 } from './Portfolio';
import {Work} from './Portfolio';
import {About} from './Portfolio';
import {Contact} from './Portfolio';
import './Portfolio.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


function Packages(){
   const [mode, setmode] = useState("dark");
   const[background, setbackground] = useState("light")
   const [darkbtntext, lightbtntext] = useState("Enable Dark Mode");

 const toggleMode = () => {
    if (mode ==="dark") {
     setmode("light");
     lightbtntext("Enable Light Mode");
     setbackground("dark");
     document.body.style.backgroundImage = 'url(/darkbackground.jpg)';
    } else {
      setmode("dark");
      lightbtntext("Enable Dark Mode") 
      setbackground("light");
      document.body.style.backgroundImage = 'url(/lightbackground.jpg)'; 
      }
    }
 
  return( 
    <div className='body'>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} btnmode={darkbtntext}/>
    <Routes>
      <Route path='/' element = {<><Introsection mode={mode} toggleMode={toggleMode} btnmode={darkbtntext}/>
      <div className=" container row text-center mx-auto ">
       <div className="col-4 ">
    <Introsection2 mode={mode} toggleMode={toggleMode} backgroundmode={background} 
    image={process.env.PUBLIC_URL + 'BCAimage.jpg'} 
    alt="Bachelor in Computer Application" title="Bachelor in Computer Application"
    text={<><h4>2021-2024</h4><h4>Indira Gandhi National Open University</h4><p>Pursuing BCA</p></>}/>
  
    </div>
  <div className="col-4">
  <Introsection2 mode={mode} toggleMode={toggleMode} backgroundmode={background}  
  image={process.env.PUBLIC_URL + 'ECEimage.jpg'} 
  alt="Diploma In ECE" title="Diploma in ECE"
  text={<><h4>2019-2016</h4><h4>CSI POLYTECHNIC COLLEGE</h4><p>Completed Diploma in first Class Division with Distinction</p></>}/>
  </div>
  <div className="col-4">
    <Introsection2 mode={mode} toggleMode={toggleMode} backgroundmode={background}  
    image={process.env.PUBLIC_URL + 'inter.jpg'} 
    title="Matric(10th Class)" alt="10th class"
    text={<><h4>2015-2016</h4><h4>C-1 Govt.Boys Senior Secondary School Yamuna Vihar</h4><p>Completed 10<sup>th</sup> in first Division</p></>}/>
    </div></div></>}/>
      <Route path='/Work' element = {<Work mode={mode} toggleMode={toggleMode} backgroundmode={background}/>}/>
      <Route path='/About' element = {<About mode={mode} toggleMode={toggleMode} backgroundmode={background}/>}/>
      <Route path='/Contact' element = {<Contact mode={mode} toggleMode={toggleMode} backgroundmode={background}/>}/>
    </Routes>
  </Router>
  </div>
  );
}
 ReactDOM.render(<Packages /> , document.getElementById("root"));