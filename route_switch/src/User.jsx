import React from 'react';
import {useParams,useLocation, useHistory} from 'react-router-dom';


const User = () =>{
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    return <><h1>{fname} {lname} page</h1>
    
    <p>My current location is {location.pathname}</p>
    
    {location.pathname === "/user/m/ali" ?
    (<button onClick={()=>history.goBack()}>Go back</button>): null}</>
}
export default User;