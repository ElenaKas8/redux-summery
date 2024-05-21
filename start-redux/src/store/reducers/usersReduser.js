
import  {usersData}  from '../../data/usersData/usersData';


const initialState = usersData;
 

const DELETE_USER = 'DELETE_USER';


export const deleteUserAction=(user_id)=>({type:DELETE_USER,payload:user_id});



export const usersReduser = (state=initialState, action) => {

    if (action.type === DELETE_USER) {

        return state.filter(el => el.id !== action.payload)
    }
    return state
}