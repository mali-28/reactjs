import changeTheNumber, {mulTheNumber}from './upDown';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    mulTheNumber
});

export default rootReducer;