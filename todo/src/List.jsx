import React from 'react';

const List = (props) =>{
    return <li><button
      className='btn-cross' 
      aria-hidden="true" 
      onClick={()=>{
          props.onSelect(props.id)}}>

          &#215;</button> 
      {props.value}</li>
}

export default List;