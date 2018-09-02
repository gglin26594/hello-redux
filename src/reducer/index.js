import {combineReducers} from 'redux'
import counter from './counter'
import anotherReducer from './anotherReducer'
import user from "./user";

const rootReducer = combineReducers({
    counter,
    anotherReducer,
    user
});

export default rootReducer;

