import {combineReducers} from 'redux'
import counter from './counter'
import anotherReducer from './anotherReducer'

const rootReducer = combineReducers({
    counter,
    anotherReducer
});

export default rootReducer;

