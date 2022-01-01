import React , {useState} from 'react';
import Header from './Header'
import './image.png';
// import Container from './Container';
import InputCard from './InputCard';
import Note from './Note';

const App = () =>{
    let [item, setItems] = useState([]);
 
    let addNote = (note) =>{
        setItems((preValue)=>{
            return [...preValue, note];
        });
    }

    let deleteItem = (id) =>{
        console.log(id)
        // console.log(item);
        setItems((oldVal)=>{
            // console.log(oldVal)
            return oldVal.filter((arr, index) =>{
                 return index !== id;
             })
        }
        );
    }

    return<>
        <Header/>
        <InputCard onSelect= {addNote}/>
        
        
        {item.map((val,index)=>{
            return <Note key= {index}
            id={index}
            title= {val.title}
            content= {val.content}
            onDelete={deleteItem}/>
        })}
            <div className='clear'/>

        </>

}


export default App;