import React, {useState} from 'react';
import Srchresult from './Srchresult';


const Search = () =>{
    let [val, setVal]  = useState();
    return <>
    <div className='search'>
      <input type='text' onChange={(event) =>{return setVal(event.target.value)}} value={val} placeholder='enter'/>
      </div>
      { val !== "" ?
      <Srchresult input={val}/> :  null}
    </>
}
export default Search;