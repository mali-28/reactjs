import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = ()=>{
    return <>
    <div className='menu'>
       <NavLink activeClassName='active_nav' to='/'>Index</NavLink>
       <NavLink activeClassName='active_nav' to='/service'>Service</NavLink>
       <NavLink activeClassName='active_nav' to='/user'>User</NavLink>
       <NavLink exact  activeClassName='active_nav' to='/search'>Search</NavLink>
       <NavLink exact activeClassName='active_nav' to='/about'>About</NavLink>
    </div>
    </>
}

export default Menu;