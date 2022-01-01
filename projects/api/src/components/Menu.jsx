import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () =>{
    return <>
    <div className='menu'>
       <NavLink className="text-white"   activeClassName='active_nav' to='/admin'>Admin</NavLink>
       <NavLink className="text-white" activeClassName='active_nav' to='/user'>User</NavLink>
    </div>
    
    </>
}

export default Menu;