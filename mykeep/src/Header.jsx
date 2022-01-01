import React from 'react';
import Container from './Container';
import logo from './image.png';
const Header = () =>{
    return(
        <div className='header'>
            <Container  content={<><h2>
                <img src={logo}/>My Keep</h2></>}>
            </Container>
        </div>
    );
        
    
   
}


export default Header;