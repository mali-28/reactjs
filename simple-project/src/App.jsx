import React, {useState} from 'react';
import Heading from './Heading';
import Span from './Span';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/button';
import Tooltip from '@material-ui/core/tooltip';

function App(){
    let getTime = new Date().getHours();

    const time = new Date().toLocaleTimeString();
    let [currTime, updatedTime] = useState(time);


    // let [count, updatedCount]= useState(0);

    // function click(){
    //   return updatedCount(++count);
    // }

    let [counting, setCounting] = useState(0);
       
    const increament = () =>{
      setCounting(++counting);
    }

    const decreament = () =>{
      setCounting(--counting);
    }

    const myFunc = () =>{
      const newTime = new Date().toLocaleTimeString();
      updatedTime(newTime)
    }
    setInterval(myFunc,1000);


let cssStyle = {};
let message;
if(getTime >= 1 && getTime < 12 ){
  message = 'Good Morning';
  cssStyle.color = 'blue';
}else if(getTime >= 12 && getTime< 19 ){
  message = 'Good Afternoon';
  cssStyle.color = 'orange';

}else{
  message = 'Good Night';
  cssStyle.color = 'red';

  
}

   return <>
     
     
     <div className='div'>
     <div className='heading'>
     <Heading style ={cssStyle} content={currTime}/>
     <Heading initialContent="Hello Sir," content={<Span style={cssStyle} content={message}/>} />
     </div>
     <h1 style={{backgroundColor: "#876BA9", padding:'5px 0', textAlign:"center", marginTop:'60px', fontSize: "3rem", color: '#fff'}}>{counting}</h1>
     <div className="btn-div">
       <Tooltip title='Add'>
        <Button onClick={increament} className='btn-green'><AddIcon/></Button>
        </Tooltip>
        <Tooltip title='Delete'>
        <Button onClick={decreament} className='btn-red'><RemoveIcon/></Button>
        </Tooltip>
     </div>
     </div>
 </>
}


export default App;