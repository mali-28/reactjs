import React from 'react';
import { Route,Switch, Redirect} from 'react-router-dom';
import Menu from './components/Menu';
import Admin from './components/Admin';
import User from './components/User';
import UserSignUp from './components/UserSignUp';
import UserForgetPass from './components/UserForgetPass';

const App = () =>{
    return <>
    <Menu/>
    <Switch>
        
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/userSignUp" component={UserSignUp}/>
        <Route exact path="/userForgetPass" component={UserForgetPass}/>
        <Redirect to="/" />

    </Switch>
    </>
}

export default App;