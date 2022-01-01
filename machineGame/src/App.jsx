import React, {useState} from 'react';



function App(){

  let inputStyle= {
    padding: "10px 30px",
    fontSize : "22px",
    textAlign : "center",
    borderColor : 'red',
    width : "700px"
  }; 
  inputStyle.color = "red";

  let [fullName, setFullName]= useState({
    fname: '',
    lname: '',
    email: '',
  });
  function change(event){
    console.log(event.target.value);
    console.log(event.target.name);


    // const value = event.target.value;
    // const name = event.target.name;

    const{value, name} = event.target;

    setFullName((preValue) =>{
      console.log(preValue);

      return{
        ...preValue,
        [name] : value,
        
      };

    //   if(name=== "FName"){
    //     return{
    //       fname: value,
    //       lname: preValue.lname,
    //       email: preValue.email,
    //     };
    //   }else if(name=== "LName"){
    //     return{
    //       fname: preValue.fname,
    //       lname: value,
    //       email: preValue.email,
    //     };
    //   }else if(name=== "EMail"){
    //     return{
    //       fname: preValue.fname,
    //       lname: preValue.lname,
    //       email: value,
    //     };
    //   }
    });
    

  }
  function submit(event){
    event.preventDefault();
    alert('Submitted succesfully')
  }


  return <>
   <div>
   <h1 style={{color: "red" }}>HELLO : "
   {fullName.fname} {fullName.lname}
   "</h1>
   <p>
     {fullName.email}
     </p>
     <br/>
     <form onSubmit={submit}>
     <input style={inputStyle} 
      onChange={change} 
      name="fname" 
      type="text" 
      placeholder="Enter Your First Name" 
     value={fullName.fname}
     />
     <br/>
     <input style={inputStyle} 
        onChange={change} 
        name='lname' 
        type="text" 
        placeholder="Enter Your Last Name" 
        value={fullName.lname}
        /><br/>

<input style={inputStyle} 
        onChange={change} 
        name='email' 
        type="email" 
        placeholder="Enter Your Email Address" 
        value={fullName.email}
        autoComplete='off'
        /><br/>
     <button type="submit"  style={{padding: '5px', color: 'red'}}>Submit📇 </button>
     </form>
     </div>
 </>
}


export default App;