import { FETCH_POST, NEW_POST} from './Types';


export function fetchPost(){
        fetch('https://storemanagerapi2.herokuapp.com/api/v2/products')
    .then(res => res.json())
    .then(data => dispatchEvent({
        type: FETCH_POST,
        payload : post
    }));
}