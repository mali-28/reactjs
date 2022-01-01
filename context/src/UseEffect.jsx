import React, {useEffect, useState} from 'react';

const UseEffect = () =>{
    let [num, setNum] = useState(0);
    let [newNum, setNewNum] = useState(0);
    
    useEffect(() =>{ return document.title =`click ${num} times`}, [num]);
    return(<>
        <button onClick={()=>{setNum(num +1)}}>Click me {num}</button>
        <button onClick={()=>{setNewNum(++newNum)}}>Click me {newNum}</button>
    </>)
}


export default UseEffect; 