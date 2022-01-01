import React,{useState} from 'react';
import List from './List';

function App(){
    let[input, setInput]= useState("");
    let[items, setItems]= useState([]);


    function change(event){
        let {value} = event.target;
        setInput(value);
    };
    const submit  = (event) =>{
        event.preventDefault();
        setItems(function(preValue){
            return[...preValue, input];
        });
        // setInput("");

      


    };

    function dltItem(id){
        setItems((preValue)=>{
            return preValue.filter((arr, index)=>{
                return index !== id;
            })
        })
    };
   
    return(
    <div className='card-div'>
        <div className='card'>
                <h1>ToDo List</h1>
        <form onSubmit={submit}>
        <input onChange={change} type='text' placeholder='Add a Item' />
        <button className='btn-add'>+</button>
        </form>
        <br/><br/>
        <div className="list">
        <ul>
            {items.map((val,index)=>{
                return (<List value={val}
                key={index}
                id={index}
                onSelect = {dltItem}
                />)
            })}
        </ul>
        </div>
        </div>
    </div>
    );
}

export default App;