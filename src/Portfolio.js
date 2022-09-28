import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./Portfolio.css";
import PropTypes from "prop-types";
import {Project} from "./projects"
import {Projectdetails} from "./projectdetails"


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
    </div>
    <div className="container-fluid mt-5 mb-5">
    <h3 className="text-center mt-5 mb-5">Technologies I Work On</h3>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="d-flex justify-content-around">
      <img src={process.env.PUBLIC_URL+"html.jpg"} class="d-block w-25 img-fluid justify-content-center" alt="..."/>
      <img src={process.env.PUBLIC_URL+"css.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      <img src={process.env.PUBLIC_URL+"javascript.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
    <div className="d-flex justify-content-around">
      <img src={process.env.PUBLIC_URL+"react.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      <img src={process.env.PUBLIC_URL+"react.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      <img src={process.env.PUBLIC_URL+"react.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      </div>
    </div>
    <div class="carousel-item">
    <div className="d-flex justify-content-around">
      <img src={process.env.PUBLIC_URL+"react.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      <img src={process.env.PUBLIC_URL+"react.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      <img src={process.env.PUBLIC_URL+"react.jpg"} class="d-block w-25 img-fluid" alt="..."/>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    <h2 className={`text-center fs-1 text-${props.mode} mb-5 mt-5`}>Qualification</h2>
    </>
    );
  }
 
function Introsection2(props){
  return( 
   <>
  <div className={`card bg-${props.backgroundmode} text-${props.mode}`}>
 <img src={props.image} className="card-img-top" alt={props.alt}/>
 <div className="card-body">
   <h5 className="card-title">{props.title}</h5>
   <p className="card-text">{props.text}</p>
 </div>
</div>
</>
)
}
export {Introsection2}


 
  function About(props){
    return(
    <div className={`text-${props.mode}`}>About here</div>
    )
  }
  function Contact(props){
    return(
      <div  className={`text-${props.mode}`}>Contact here</div>
    )
  }
 function Work(props){
  const projectelements = Projectdetails.map((content)=>{
    return <Project
    id={content.id}
    title = {content.title}
    description = {content.description}
    tech={content.Tech}
    image={content.image}
    time={content.time}
    subtitle={content.subtitle}
    props= {props}
    />
   })
   console.log(props);
    return(
    <>
    <h1 className={ `text-center text-${props.mode} mb-5`}>Projects</h1>
      <div class={`row justify-content-around`}>
        {projectelements }
        </div>
    </>
  
    )
 }
 function Experience(props){
<>

</>
 }

export default Navbar;
export {Introsection}; 
export {Work};
export {About};
export {Contact};
export {Experience}

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

