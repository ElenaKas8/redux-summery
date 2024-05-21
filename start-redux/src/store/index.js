import {createStore,combineReducers} from 'redux';
import { usersReduser } from './reducers/usersReduser';


const rootReducer = combineReducers({
    users:usersReduser

});


export const store = createStore(rootReducer);