//action -
//type - what has been performed
//payload - what is the data associated with the action
import * as actionTypes  from "../actionTypes";

export const addUserToStore = (user) => {  
    return {
        type: actionTypes.AddUserToStore,
        payload: user
    }
}