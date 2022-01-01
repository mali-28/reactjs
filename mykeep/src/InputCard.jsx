import React, {useState} from 'react';
import Container from './Container';
import AddIcon from '@material-ui/icons/Add';

function InputCard(props){
    let [dNone, dBlock] = useState("none");
    let [height, getHeight] = useState("default");

    let[note, setNote] = useState({
        title: '',
        content : '',
    });

    function show(){
        dBlock('block');
        getHeight("225px");
    }
    function hide(){
        dBlock('none');
        getHeight("150px");
    }

    const inputEvent = (event) => {
        // event.preventDefault();
        let {name, value} = event.target;

        setNote((preValue) =>{
          return{...preValue,
               [name] : value,

          }

        });
        console.log('i am note')
    }

    const click = () =>{
        setNote({
            title: '',
            content : '',
        });
        props.onSelect(note);
    }


    return(
    <div>
      <Container content={<>
         <div style={{height: height}} className='input-card div-center w-30 mt-2 mb-4'>
             <input value={note.title} name="title" onChange={inputEvent} style={{display : dNone, fontSize: '20px', fontWeight: 'bold'}} type="text" autoComplete='off' placeholder='Title'/>
            <textarea value={note.content} name='content' onChange={inputEvent} onDoubleClick={hide} onClick={show} type="text"  placeholder='Write a note.'/>
            <div class='div-btn mr-1 mt-1'>
            <button onClick={click} className='btn-green primary_color p-05' style={{display: dNone}}><AddIcon/></button>
            </div>
         </div>
      </>}></Container>
    </div>);
}

export default InputCard;