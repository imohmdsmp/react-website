export const ACTION_SET_USER = 'ACTION_SET_USER';

export const actionSetUser = (user)=>{
    return {
        type : ACTION_SET_USER,
        payload: user
    }
}

