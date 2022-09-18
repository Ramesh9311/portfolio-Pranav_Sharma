import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";



function Project(props) {

        return(
            <>
            <div className="col-7">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL+props.image} className="card-img-top" alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.subtitle}</p>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><b>Technology Used:</b>{props.tech}</p>
                        <p className="card-text">Time Spent: {props.time}</p>
                        <a href={props.url} className="btn btn-primary">Visit Site</a>
                    </div>
                    </div>
                </div>
             
             </>

    )


}
               
export {Project}



