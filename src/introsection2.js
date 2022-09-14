import React from 'react';


function Introsection2(props){
   return( 
    <div>
   <div className="card" Style="width: 18rem;">
  <img src="/portfolio/portfolio/public/BCAimage.jpg" class="card-img-top" alt={props.alt}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Go somewhere</button>
  </div>
</div>
</div>
)
}
export {Introsection2}