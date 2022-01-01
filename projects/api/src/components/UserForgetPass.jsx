import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const UserForgetPass = () =>{
    const history = useHistory();
    let [updateData, setUpdateData] = useState({
         email : '',
    });
    // let [passCheck, setPassCheck] = useState('');
  //  const changePass = (event) =>{
  //   setPassCheck(event.target.value);
  //   console.log(event.target.value);
  //  }
    const change = (event) => {
        event.preventDefault();
        let {name, value} = event.target;
        console.log(name, value);
        
        setUpdateData((preVal)=>{
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

  
    const forgetPass = () =>{
        // if(passCheck !== updateData.password){
        //   alert('please enter same password');
        // }else{
    
        const url    = 'https://bookofpositivity.herokuapp.com/auth/forgotpassword';

        console.log(updateData);
      
    
        // console.log(JSON.stringify({email: updateData.email }));
      
        fetch(url,{
          method: 'POST', 
          body: JSON.stringify({email: updateData.email }),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => success(response))
        .catch(error => failure(error));


        setUpdateData({
          email : '',
          // password : '',
          });
          // setPassCheck('');
        }
    // }

    function back (){
        history.goBack()
    }

  
     return <>
     
    <div className='main'>
    <div className='box p-3'>
       <h2 className="text-center text-red">Update Password</h2>
            <form className='form'>
                
                <input type='email' onChange={change} name='email' className="input" placeholder=" ✍️Enter your email ✉️" value={updateData.email}/><br/> 
                
                
                <br/>
                {/* <input type='password' onChange={change} name='password' className="input" placeholder=" ✍️Enter new password 📋" value={updateData.password}/><br/> 
                <br/>

                <input type='password' onChange={changePass} value={passCheck} className="input" placeholder=" ✍️Enter password again 📋" /><br/> */}
                
                
                
                <br/>
                <br/>
                <button type='button' onClick={()=>{forgetPass()}} className="button ml-1">Submit</button><br/><br/>
                 <button type='button' className="ml-1" onClick={()=> back()}> ⏪ Go Back ⏪</button>
                <p id="after">This is the JSON after the fetch.</p>






            </form>
        </div>
    </div>
    
    </>
}

export default UserForgetPass;