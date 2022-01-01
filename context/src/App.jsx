import React,{ createContext }  from 'react';
import CosA from './CosA';
import UseEffect from './UseEffect';

const FirstName = createContext();
const LastName = createContext();

const App  = () =>{
    return (<><FirstName.Provider value='Muhammad'>
    <LastName.Provider value='Ali'><CosA/></LastName.Provider>
    </FirstName.Provider>
    
    {/* use effect */}
    <UseEffect/>
    </>)
    }

export default App;
export {FirstName, LastName};