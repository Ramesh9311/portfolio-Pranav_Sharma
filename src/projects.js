import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

function Project(props){
    return(
    <>
     <div className={`card p-0 col-5 g-5 text-${props.props.mode} bg-${props.props.backgroundmode}`}>
     <img src={process.env.PUBLIC_URL+props.image} className="card-img-top" alt={props.title}/>
     <h5 className="card-title ps-2">{props.title}</h5>
     <p className="card-text ps-2">{props.subtitle}</p>
     <p className="card-text ps-2">{props.description}</p>
     <p className="card-text ps-2"><b>Technology Used:</b>{props.tech}</p>
     <p className="card-text ps-2">Time Spent: {props.time}</p>
     <a href={props.url} className="btn btn-warning">Visit Site</a>
   </div>
   </>
    )
   }

    export {Project};
   