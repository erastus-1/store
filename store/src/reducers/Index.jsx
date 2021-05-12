import counterReducer from './Counter';
import loggedReducer from './Logged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
});
export default allReducers;