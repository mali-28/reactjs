import React from 'react';
import RemoveIcon from '@material-ui/icons/Delete';
function Note(props){
    const deleteNote = () =>{
      props.onDelete(props.id);
    }


    return(
         <div  className='float-left div-note wmin-20  m-2 mb-4 p-1'>
             <h2 >{props.title}</h2><br/><hr/><br/>
            <p>{props.content}</p>
            <div class='div-btn mr-1 mt-1'>
            <button onClick={deleteNote} className='btn-red primary_color p-05'><RemoveIcon className='deleteIcon'/></button>
            </div>
         </div>
        

    );
}
    

export default Note;