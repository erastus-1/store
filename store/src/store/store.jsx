import { createStore, applyMildware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/Index';


const initialState = {};


const mildware = [ thunk ];


const store = createStore (
    rootReducer, 
    initialState, 
    compose(
    applyMildware(...mildware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


export default store;