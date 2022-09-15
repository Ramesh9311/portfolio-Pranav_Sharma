import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./Portfolio.css";
import PropTypes from "prop-types";

function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg text-${props.mode}`}>
        <div className="container-fluid border-bottom border-warning border-4">
          <a className={`navbar-brand fs-1 align-self-center text-${props.mode}`}href="/">{props.navhead} </a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className={`nav-link text-${props.mode}`} to="/">{props.nav1}</Link>
              <Link className={`nav-link text-${props.mode}`} to="/Work">{props.nav2}</Link>
              <Link className={`nav-link text-${props.mode}`} to="/About">{props.nav3}</Link>
              <Link className={`nav-link text-${props.mode}`} to="/Contact">{props.nav4}</Link>
            </div>
          </div>
          <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckChecked" >{props.btnmode}</label>
        </div>
        </div>
      </nav>
      <br /><br />
      
    </div>
  );
  }

  function Introsection(props){
    
    return(
      <>
    <div className={`section container-fluid row text-${props.mode}`}>
      <div id="intro" className="col-lg-8 col-md-6 text-start ">
        <h1>Hii!!</h1>
        <p>My name is <span><u>Pranav Sharma</u></span><br />I'm a <u>Front End Developer</u>.<br />I make websites using HTML , CSS and JavaScript <br /> as well as i can design things using Adobe Illustrator.
        </p>
      </div>

      <div id="profile" className="col-lg-4 col-md-6 ">
        <div id="photo"></div>
      </div>
    </div><br/><br/>
    <h2 className={`text-center fs-1 text-${props.mode}`}>Qualification</h2>
    </>
    );
  }
 
function Introsection2(props){
  return( 
   <div>
  <div className={`card bg-${props.backgroundmode} text-${props.mode}`} Style="width: 18rem;">
 <img src={props.image} className="card-img-top" alt={props.alt}/>
 <div className="card-body">
   <h5 className="card-title">{props.title}</h5>
   <p className="card-text">{props.text}</p>
 </div>
</div>
</div>
)
}
export {Introsection2}

  function Work(){
    return(
    <div>Work here</div>
    )
  }
  function About(){
    return(
    <div>About here</div>
    )
  }
  function Contact(){
    return(
      <div>
        Contact here
      </div>
    )
  }


export default Navbar;
export {Introsection}; 
export {Work};
export {About};
export {Contact};

Navbar.defaultProps = {
  navhead: "Pranav Sharma",
  nav1: "Introduction",
  nav2: "Work/Projects",
  nav3: "About_Me",
  nav4: "Contact",
};

Navbar.propTypes = {
  navhead: PropTypes.string,
  nav1: PropTypes.string,
  nav2: PropTypes.string,
  nav3: PropTypes.string,
  nav4: PropTypes.string,
};

