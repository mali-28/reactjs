import React, { useEffect, useState } from 'react';
import './index.css'
import web from './images/image1.svg';

//To get the data from local storage
const getLocalItems = () =>{
    let list = localStorage.getItem('lists')
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }else{
        return []
    }
}
const Todo = () =>{

    const [input, setInput] = useState('');
    const [items, setItems] = useState(getLocalItems);
    const [toggleSubmit, setToggleSubmit] = useState(true);  
    const [editNewItem, setEditNewItem] = useState(null);
    const addItems = () =>{
        if(!input){
           return null
        }else if(input && !toggleSubmit){
            setItems( items.map((elem)=>{
                if(elem.id === editNewItem){
                    return {...elem, name : input}
                }else if (!editNewItem){
                    setToggleSubmit(true);
                }
                return elem;

            })
              
            )
            setInput('');
            setToggleSubmit(true);
            setEditNewItem(null);

        }else{
        
            const allInput = {id : new Date().getTime().toString(), name : input}
        setItems([...items, allInput]);
        setInput('');
        }
    }

    const deleteItem = (id) =>{
        setItems( items.filter((elem)=>{
            return id !== elem.id;
        })
        )
        
    }

    const editItem = (id) =>{
        let updateInput = items.find((elem)=>{
            return elem.id === id;
        })
        console.log(updateInput);
        setToggleSubmit(false);
        setInput(updateInput.name);
        setEditNewItem(id);
    }

const removeAll = () =>{
    setItems([]);
}

 useEffect(()=>{
    localStorage.setItem('lists' , JSON.stringify(items))},[items]
 ); 
    return<>
        <div className='main-div'>
            <div className='child-div'>
            <figure>
              <img src={web} alt='web'/>  
              <figcaption>Add Your List Here ✌️</figcaption>
            </figure>

            <div className='addItems'>

                <input type='text' 
                value={input}
                onChange={(event) =>{
                    setInput(event.target.value);
                }}

                placeholder='✍️ Add Items...'/>

                {
                    toggleSubmit ? <i onClick={addItems}  className="fas fa-plus add-btn" title='Update Item'></i>:
                    <i onClick={addItems} className='far fa-edit add-btn' title='Edit Item'></i>

                }
            
            </div>


            <div className='showItems'>
                {items.map((value)=>{
                    return(<div key={value.id} className='eachItem'>
                        <h3>{value.name}</h3>
                        <div className='todo-btn'>
                        <i onClick={() => editItem(value.id)} className='far fa-edit add-btn' title='Edit Item'></i>
                        <i onClick={() => deleteItem(value.id)} className='far fa-trash-alt add-btn' title='Delete Item'></i>
                        </div>
                    </div>)
                })}
                
            </div>

            <div className='showItems'>
                <button onClick={removeAll} className='btn effect04' data-sm-link-text='Remove All'><span> Check List</span></button>
            </div>
            </div>
        </div>
    </>

}

export default Todo;