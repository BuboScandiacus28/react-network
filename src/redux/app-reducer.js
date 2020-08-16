import {getAuthUserTh} from "./auth-reducer";

let initialState = {
    initialized: false
};

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializedSuccessTh = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserTh());

        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    };
};

const appReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        //Добавление данный залогиненного пользователя в систему 
        case INITIALIZED_SUCCESS: {
            stateCopy = {
                ...state,
                initialized: true
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export default appReducer;