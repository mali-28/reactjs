import React from 'react';

function Heading(props){
return <h1 style={props.style}><span style={{color: "red",}}>{props.initialContent}</span>{props.content}</h1>
}

export default Heading;