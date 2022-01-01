import React from 'react';

import Card from './Card'
import $data from './$data';


function ncard(val){
    return(
        <Card 
        key = {val.id}
        imgSrc= {val.imgSrc}
        sname={val.sname} 
        title={val.title} 
        link={val.link}/>
    )
}
function App(){
return(<div className='col-3'>
   {$data.map(ncard)}

</div>);
}
export default App;