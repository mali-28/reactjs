import React from 'react';

function Para(){
    const currDate =  new Date().toLocaleDateString();
    const currTime =  new Date().toLocaleTimeString();
    return <>
     <p>Today date is {currDate}</p>
    <p>Today date is {currTime}</p>
    </>

  
}

export default Para;