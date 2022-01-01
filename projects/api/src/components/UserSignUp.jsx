import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const UserSignUp = () =>{ 
    
    const history = useHistory();
    let [signUpData, setSignUpData] = useState({
         name : '',
         email : '',
         password : '',
         gender : '',
    });
    let [passCheck, setPassCheck] = useState('');

    const change = (event) => {
        event.preventDefault();
        let {name, value} = event.target;
        console.log();
        setPassCheck(event.target.value);
        setSignUpData((preVal)=>{
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
        if(passCheck !== signUpData.password){
          alert('please enter same password');
        }else{
    
        const url    = 'https://bookofpositivity.herokuapp.com/auth/signup';

        console.log(signUpData);
      
    
      
        fetch(url,{
          method: 'POST', 
          body: JSON.stringify(signUpData),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => success(response))
        .catch(error => failure(error));


        setSignUpData({
          name : '',
          email : '',
          password : '',
          gender : '',
          });
          setPassCheck('');
        }
    }

    useEffect(() => {
         fetch('https://bookofpositivity.herokuapp.com/auth/verify',{
           method : "GET",
           body : JSON.stringify()
         })
    });

    function back (){
        history.goBack()
    }

  
     return <>
     
    <div className='main'>
    <div className='box p-3'>
       <h2 className="text-center text-red">SignUp</h2>
            <form className='form'>
                
            <input type="text" onChange={change} name='name' className="input" placeholder=" ✍️Enter your name 📝" value={signUpData.name}/><br/> 
                
                <br/>
                
                <input type='email' onChange={change} name='email' className="input" placeholder=" ✍️Enter an email ✉️" value={signUpData.email}/><br/> 
                
                
                <br/>
                <input type='password' onChange={change} name='password' className="input" placeholder=" ✍️Enter a password 📋" value={signUpData.password}/><br/> 
                <br/>

                <input type='password' onChange={change} value={passCheck} className="input" placeholder=" ✍️Enter password again 📋" /><br/>
                
               
                <br/>
                <input type='text' onChange={change} name='gender' className="input" placeholder=" ✍️Enter your gender 👨‍✈️  🦹‍♀️" value={signUpData.gender}/>
                
                
                <br/>
                <br/>
                <button type='button' onClick={()=>{click()}} className="button ml-1">Submit</button><br/><br/>
                 <button type='button' className="ml-1" onClick={()=> back()}> ⏪ Go Back ⏪</button>
                <p id="after">This is the JSON after the fetch.</p>






            </form>
        </div>
    </div>
    
    </>
}
export default UserSignUp;