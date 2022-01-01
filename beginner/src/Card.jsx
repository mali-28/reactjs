import React from 'react';
import Image from "./Image" ;
import Heading from './Heading'
function Card(props){
    return(
      <>
    <div className="cards">
          <div className='card'>
              <Image imgSrc = {props.imgSrc}/>
              <div className="card-body">
                  <span className='card-category'>{props.sname}</span>
                  <Heading sname= {props.sname}/>
                   <a href={props.link} target='_blank'>
                       <button> Watch Now </button>
                   </a>
              </div>
          </div>
      </div>
    </>
    );
  }


  export default Card;