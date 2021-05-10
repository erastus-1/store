const counterReducer = (state = 0, action) => { 
    switch(action.type){
        case 'INCREAMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
};
export default counterReducer;