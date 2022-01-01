import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
const User = () =>{ 
    

    let [inputData, setInputData] = useState({
         email : '',
         password : '',
    });

    // let [dataArr , setDataArr] = useState([]);
    // const data = dataArr[dataArr.length-1]
    const change = (event) => {
        event.preventDefault();
        let {name, value} = event.target;
        console.log();
        setInputData((preVal)=>{
            return {...preVal, [name] : value}
        })
    
    }


    // Save this as fetch.js --------------------------------------------------------------------------

function success(json) {
    document.getElementById('after').innerHTML = "AFTER: " + JSON.stringify(json);
    console.log("AFTER: " + JSON.stringify(json));
  } // ----------------------------------------------------------------------------------------------
  
  function failure(error) {
    document.getElementById('after').innerHTML = "ERROR: " + error;
    console.log("ERROR: " + error);
  } // --------------------------------------------------------------------------------------

  
    const click = () =>{
       
        // setDataArr((preVal) =>{
        //     // console.log(inputData)
        //     return [...preVal, inputData]
        // });
        

//         
        // api fetching

        const url = 'https://bookofpositivity.herokuapp.com/auth/login';
        // const data = info;
        console.log(inputData);
      
    
      
        fetch(url, {
          method: 'Post', 
          body: JSON.stringify(inputData),
          headers:{
            'Content-Type': 'application/json',
            // 'Authorization':''
          }
        }).then(res => res.json())
        .then(response => success(response))
        .catch(error => failure(error));


        setInputData({
          email : '',
          password : '',
          })
    }

    // const fetchApi = async () =>{
    //     try{
    //     const url = `https://bookofpositivity.herokuapp.com/auth/login`;
    //     const response = await fetch(url);
    //     const resJson = await response.json();
    //     console.log(resJson);
    //     }catch(error){
    //        console.error(error)
    //     }
    // }
    // useEffect( () =>{fetchApi()}, [click]);
     return <>
     
    <div className='main'>
    <div className='box p-3'>
       <h2 className="text-center text-green">Login</h2><br/>
            <form className='form'>
                
            
                
                <input type="email" onChange={change} name='email' className="input" placeholder=" ✏️Enter an email ✉️" value={inputData.email}/><br/> 
                
                
                <br/>
                <input type='password' onChange={change} name='password' className="input" placeholder=" ✏️Enter password 📝" value={inputData.password}/><br/> 
                
               
                <br/>
                
                
                <br/>
                <br/>
                <button type='button' onClick={()=>{click()}} className="button ml-1">Login</button><br/><br/>
                <span className='text-center'>If you are not signin please : <NavLink style ={{color : "red",}} to='/userSignUp'>SignUp</NavLink></span><br/>
                <span className='text-center'>I forgot my password <NavLink style ={{color : "red",}} to='/userForgetPass'>Change Password</NavLink></span>
                <p id="after">This is the JSON after the fetch.</p>






            </form>
        </div>
    </div>
    
    </>
}

export default User;