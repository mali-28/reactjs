import React, { useContext } from 'react';
import {FirstName, LastName} from './App';
const CosC  = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
    <>

    <FirstName.Consumer>
        {(fname) =>{ return (
            <LastName.Consumer>{(lname) =>{
            return <h1>My Name is {fname} {lname}</h1>
        }}</LastName.Consumer>
        )
    }}
        </FirstName.Consumer>

        {/* or */}

        <h1>My name is {fname} {lname}</h1>


        
    </>)
}

export default CosC;