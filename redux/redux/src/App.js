import React from 'react';
import'./index.css'
import {useDispatch, useSelector} from 'react-redux';
import {incNumber, decNumber, mulNumber, divNumber} from './actions/index.js';

const App = ()  => {
  const dispatch = useDispatch();

  const incState = useSelector((state) => state.changeTheNumber)
  const mulState = useSelector((state) => state.mulTheNumber)
  return (
    <>
      <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a onClick ={() => dispatch(decNumber())}  className="quantity__minus" title="Decrement"><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={incState} />
        <a onClick ={() =>dispatch(incNumber(5))} className="quantity__plus" title="Increment" ><span>+</span></a>
      </div>
  
          </div>




      <div className="container">
  
  
  <h1>Multipication/Division counter</h1>
  <h4>using React and Redux</h4>
  
  <div className="quantity">
    <a onClick ={() => dispatch(mulNumber())}  className="quantity__minus" title="Multipication"><span>*</span></a>
    <input name="quantity" type="text" className="quantity__input" value={mulState} />
    <a onClick ={() => dispatch(divNumber())} className="quantity__plus" title="Division" ><span>/</span></a>
  </div>

      </div>

        </div>
    </>
  )}

export default App;
