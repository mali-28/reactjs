import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Index from './Home';
import About from './About';
import Service from './Service';
import User from './User';
import Error from './Error';
import Menu from './Menu';
import Search from './Search';

const App = () => {
    

    return(<>
        <Menu/>
       <Switch>
       <Route exact path='/' component={Index}></Route>
       <Route exact path='/about' component={About}></Route>
       <Route exact path='/service' render={()=> <Service name='Service'/>}></Route>
       <Route exact path='/user/:fname/:lname' component={User}></Route>
       <Route exact path='/search' component={Search}></Route>
       {/* <Route  component={Error}></Route>*/}
       <Redirect to='/'/>
       
       </Switch>
    </>)
}

export default App;