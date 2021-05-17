import { FETCH_POST, NEW_POST} from './Types';
import login from '../components/Login'


export const fetchPost =()=> dispatch => {
        fetch('https://storemanagerapi2.herokuapp.com/api/v2/products')
    .then(res => res.json())
    .then(data => 
        dispatch({
        type: FETCH_POST,
        payload : login
    }));
}