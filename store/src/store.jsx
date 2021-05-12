import { createStore, applyMildware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/Index';


const initialState = {};


const mildware = [ thunk ];


const store = createStore (rootReducer, initialState, applyMildware(...mildware))


export default store;