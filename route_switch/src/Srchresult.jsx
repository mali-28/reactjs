import React from 'react';

const Srchresult= (props) =>{
    const img = `https://source.unsplash.com/400x300/?${props.input}`
    return <>
    <div className='searchimage'>
    <img src={img}/>
    </div>
    </>
}
export default Srchresult;